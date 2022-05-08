const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  static: path.resolve(__dirname, 'static'),
};

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const mode = isDev ? 'development' : 'production';

module.exports = {
  mode,

  target: `browserslist:${mode}`,

  devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

  stats: isDev ? 'minimal' : 'normal',

  entry: {
    main: './src/index.tsx',
  },

  output: {
    clean: true,
    hashDigestLength: 10,
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },

  devServer: {
    client: { logging: 'warn' },
    historyApiFallback: true,
  },

  module: {
    generator: {
      'asset/resource': {
        filename: 'assets/[hash][ext][query]',
      },
    },

    rules: [
      {
        test: /\.tsx?$/,
        include: paths.src,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          isProd && MiniCssExtractPlugin.loader,
          isDev && 'style-loader',
          'css-loader',
        ].filter(Boolean),
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
      favicon: path.join(paths.src, 'assets', 'favicon.png'),
      template: path.join(paths.src, 'template.html'),
    }),

    isDev && new ReactRefreshPlugin(),

    isProd &&
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '~': paths.src,
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' },
    minimize: isProd,
    minimizer: ['...', isProd && new CssMinimizerPlugin()].filter(Boolean),
  },
};
