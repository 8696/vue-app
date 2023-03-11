/* eslint-env node */

const fs = require('fs-extra')
const path = require('path')
const packageData = require('./package.json')

/**
 * 自定义环境列表
 * */
const envCustomList = [
  'development',
  'beta',
  'production'
]
/**
 * 自定义 ENV 值：
 * 1、REACT_APP_ 开头的可被浏览器读取，可通过 process.env.REACT_APP_xxx 获取
 * 2、数组索引对应的自定义环境列表
 * */
const envCustomValue = {
  /** 生成 sourcemap */
  VITE_APP_GENERATE_SOURCEMAP: [
    'true',
    'true',
    'false'
  ],
  /** 请求地址 */
  VITE_APP_URL_API: [
    'http://development.com',
    'http://beta.com',
    'http://production.com'
  ]
}

const mkdirContent = (envIndex) => {
  let value = ''
  Object.keys(envCustomValue).forEach(key => {
    value += key + '=' + (envCustomValue[key][envIndex] || 'null') + '\r\n'
  })
  return value
}

;(async function() {
  // 删除 .env.custom.xx 文件
  const rootPathFileList = require('fs').readdirSync(path.resolve(__dirname, './'))
  for (let i = 0; i < rootPathFileList.length; i++) {
    const file = rootPathFileList[i]
    if (/\.env\./.test(file)) {
      await fs.remove(path.resolve(__dirname, `./${file}`))
    }
  }
  // 删除 package.json > scripts > start | build 开头的脚本
  Object.keys(packageData.scripts).forEach(key => {
    if (/start:/.test(key) || /build:/.test(key)) {
      delete packageData.scripts[key]
    }
  })

  const scripts = {}
  for (let i = 0; i < envCustomList.length; i++) {
    // 刷入 env 文件
    const envCustomItem = envCustomList[i]
    await fs.outputFile(path.resolve(__dirname, `./.env.${envCustomItem}`), mkdirContent(i))
    // 暂存 script
    scripts[`start:${envCustomItem}`]
      = `vite --mode ${envCustomItem}`
    scripts[`build:${envCustomItem}`]
      = `pnpm check && vite build --mode ${envCustomItem}`
  }
  // 刷入 script
  packageData.scripts = {
    ...scripts,
    ...packageData.scripts
  }

  await fs.outputFile(
    path.resolve(__dirname, './package.json'),
    JSON.stringify(packageData, null, '  ')
  )
}())


