const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    main: path.join(paths.src, 'index.jsx'),
  },

  output: {
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
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
      favicon: path.join(paths.src, 'assets/favicon.png'),
      template: path.join(paths.src, 'template.html'),
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/,
        exclude: path.resolve(__dirname, '../src/assets/embed'),
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../src/assets/embed'),
        use: ['@svgr/webpack'],
      },
    ],
  },

  resolve: {
    alias: {
      '~src': path.resolve(__dirname, '../src'),
      '~assets': path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.js', '.jsx'],
  },
};
