const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  devtool: false,

  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },

  optimization: {
    minimize: true,
    runtimeChunk: {
      name: 'runtime',
    },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
