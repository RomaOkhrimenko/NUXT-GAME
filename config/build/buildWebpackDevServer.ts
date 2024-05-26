import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildWebpackDevServer = (options: BuildOptions): DevServerConfiguration => ({
  port: options.port,
  historyApiFallback: true,
  hot: true,
});
