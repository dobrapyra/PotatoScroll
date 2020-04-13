/* global require module __dirname */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  const library = 'PotatoScroll';
  const version = `${JSON.stringify(require('./package.json').version)}`;

  const chunksCfg = [
    {
      entry: './src/js/build.js',
      filename: 'potato-scroll',
      libraryTarget: 'window',
    },
    {
      entry: './src/js/index.js',
      filename: 'potato-scroll.umd',
      libraryTarget: 'umd',
    },
  ];

  return chunksCfg.map(chunkCfg => ({
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: path.resolve(__dirname, '.'),
      writeToDisk: true,
      port: 4000,
      open: true
    },
    entry: chunkCfg.entry,
    output: {
      // publicPath: '.'
      path: path.resolve(__dirname, './dist'),
      filename: `${chunkCfg.filename}${(devMode ? '.js' : '.min.js')}`,
      library: library,
      libraryTarget: chunkCfg.libraryTarget,
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
              presets: ['@babel/preset-env']
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
        filename: devMode ? `${chunkCfg.filename}.css` : `${chunkCfg.filename}.min.css`,
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
            // output: null,
            output: {
              preamble: `/**
 * ${library}
 * author: dobrapyra (Michał Zieliński)
 * version ${version}
 */`
            },
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
  }));
};
