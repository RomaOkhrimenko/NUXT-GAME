import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { VueLoaderPlugin } from 'vue-loader'

export const buildWebpackPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: options.paths.template,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin(),
  new VueLoaderPlugin()
];
