/* global require module __dirname */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  return {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: path.resolve(__dirname, '.'),
      writeToDisk: true,
      port: 4000,
      open: true
    },
    entry: './src/js/build.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: devMode ? 'potato-scroll.js' : 'potato-scroll.min.js',
      // publicPath: '.'
      library: 'PotatoScroll',
      libraryTarget: 'window',
      libraryExport: 'default',
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'potato-scroll.css'
      })
    ],
    optimization: {
      minimize: !devMode,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          },
        }),
      ],
    },
  };
};
