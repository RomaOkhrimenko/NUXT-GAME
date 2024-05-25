import path from 'path'
import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildEnv, BuildOptions} from './config/build/types/config'
import 'webpack-dev-server'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const options: BuildOptions = {

    port,
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'main.ts'),
      build: path.resolve(__dirname, 'dist'),
      template: path.resolve(__dirname, 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
  };

  return buildWebpackConfig(options);
};
