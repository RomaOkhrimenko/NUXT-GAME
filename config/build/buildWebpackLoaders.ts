import { BuildOptions } from './types/config';
import webpack from 'webpack'

export const buildWebpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const vueLoader =  {
    test: /\.vue$/,
    loader: 'vue-loader'
  }

  const cssLoader = {
    test: /\.(css|s[ac]ss)$/i,
    use: [
      'vue-style-loader',
      'css-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.ts$/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
      transpileOnly: true,
    },
  };


  return [
    vueLoader,
    typescriptLoader,
    fileLoader,
    svgLoader,
    cssLoader,
  ];
};
