
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildWebpackLoaders } from './buildWebpackLoaders';
import { buildWebpackPlugins } from './buildWebpackPlugins';
import { buildWebpackResolvers } from './buildWebpackResolvers';
import { buildWebpackDevServer } from './buildWebpackDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    mode, paths, isDev
  } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'index.[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildWebpackLoaders(options),
    },
    resolve: buildWebpackResolvers(options),
    plugins: buildWebpackPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
    optimization: {
      runtimeChunk: 'single',
    },
  };
};
