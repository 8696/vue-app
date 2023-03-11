import type { BuildOptions } from 'vite'

export const getSourcemap = (mode: string, envValue: string): BuildOptions['sourcemap'] => {
  const genValue = (envValue: string) => {
    return ['true', 'false'].includes(envValue) ? (envValue === 'true') : envValue
  }
  const newEnvValue = genValue(envValue)

  if (mode === 'production' && !newEnvValue) {
    return false
  }
  return newEnvValue as BuildOptions['sourcemap']
}
