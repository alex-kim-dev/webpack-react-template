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
    hashDigestLength: 10,
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
    }),
  ],

  module: {
    generator: {
      'asset/resource': {
        filename: 'assets/[hash][ext][query]',
      },
    },

    rules: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        use: 'babel-loader',
      },
      {
        test: /\.(ico|gif|png|jpe?g)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        oneOf: [
          { resourceQuery: /^$/, use: '@svgr/webpack' },
          { resourceQuery: /^\?file$/, type: 'asset/resource' },
          { resourceQuery: /^\?inline$/, type: 'asset/inline' },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },

  resolve: {
    alias: {
      '~src': paths.src,
      '~assets': path.join(paths.src, 'assets'),
    },
    extensions: ['.js', '.jsx'],
  },
};
