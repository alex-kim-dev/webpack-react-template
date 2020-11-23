const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: [path.join(paths.src, 'index.jsx')],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack react template',
      favicon: path.join(paths.src, 'images/favicon.png'),
      template: path.join(paths.src, 'template.html'),
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: ['babel-loader'],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
};
