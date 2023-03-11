/// <reference types="vite/client" />
import { BuildOptions } from 'vite'
interface ImportMetaEnv {
  //
  VITE_APP_URL_API: string
  // 是否生成 sourcemap
  VITE_APP_GENERATE_SOURCEMAP: BuildOptions['sourcemap']
}
