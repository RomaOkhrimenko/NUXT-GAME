export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string,
  build: string,
  src: string,
  template: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  mode: BuildMode,
  port: number,
  paths: BuildPaths,
  isDev: boolean
}
