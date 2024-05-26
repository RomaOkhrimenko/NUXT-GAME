import { BuildOptions } from './types/config'
import { ResolveOptions } from 'webpack';
import path from 'path'

export const buildWebpackResolvers = (options: BuildOptions): ResolveOptions => ({
  extensions: ['.vue', '.ts', '.js'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  alias: {
    '*': path.resolve(options.paths.src),
    '@core': path.resolve(options.paths.src, '@core'),
    'vue': '@vue/runtime-dom'
  }
});
