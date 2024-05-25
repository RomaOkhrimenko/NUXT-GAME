import { BuildOptions } from './types/config';

export const buildWebpackDevServer = (options: BuildOptions) => ({
  port: options.port,
  historyApiFallback: true,
});
