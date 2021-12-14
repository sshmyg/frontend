const path = require('path');

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const publicPath = '/';
const isDev = process.env.NODE_ENV !== 'production';
const staticCommon = 'static';
const staticCss = `${staticCommon}/css`;
const staticJs = `${staticCommon}/js`;
const staticMedia = `${staticCommon}/media`;

const getCssLoaders = (props = {}) => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: isDev,
      ...(props.modules
        ? {
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          }
        : {}),
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: isDev,
    },
  },
];

module.exports = {
  cache: isDev,
  devtool: isDev ? 'eval-source-map' : undefined,
  entry: './src/index.tsx',
  mode: isDev ? 'development' : 'production',

  stats: {
    warnings: false,
    children: false,
  },

  watchOptions: {
    aggregateTimeout: 100,
    poll: true,
  },

  output: {
    pathinfo: isDev,
    path: path.join(process.cwd(), 'dist'),
    filename: isDev
      ? `${staticJs}/[name].js`
      : `${staticJs}/[name].[contenthash:8].js`,
    chunkFilename: isDev
      ? `${staticJs}/[name].chunk.js`
      : `${staticJs}/[name].[contenthash:8].chunk.js`,
    publicPath,
    assetModuleFilename: `${staticMedia}/[name].[hash:8].[ext]`,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.join(process.cwd(), 'src'),
    },
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,

    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          compress: true,
          mangle: true,
        },
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: getCssLoaders(),
      },

      {
        test: /\.module\.css$/,
        use: getCssLoaders({ modules: true }),
      },

      {
        test: [/\.ttf$/, /\.woff$/, /\.eot$/],
        type: 'asset/resource',
        /* generator: {
          filename: `${staticMedia}/[name].[hash:8].[ext]`,
        } */
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
      silent: true,
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      minify: isDev
        ? {}
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
    }),

    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '',
    }),

    !isDev &&
      new MiniCssExtractPlugin({
        filename: `${staticCss}/[name].[contenthash:8].css`,
        chunkFilename: `${staticCss}/[name].[contenthash:8].chunk.css`,
      }),

    !isDev &&
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            noErrorOnMissing: true,
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),

    new CopyPlugin({
      patterns: [
        {
          from: './src/locales',
          to: `${staticCommon}/locales/[name].json`,
        },
      ],
    }),

    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),

    new webpack.BannerPlugin({
      banner: `/*! Bundle created at: ${new Date().toJSON()} */\n`,
      raw: true,
      entryOnly: true,
    }),
  ].filter(Boolean),

  devServer: {
    static: {
      directory: './public',
      publicPath,
      watch: {
        ignored: /node_modules/,
      },
    },

    devMiddleware: {
      publicPath,
      stats: {
        warnings: false,
        modules: false,
        hash: false,
        children: false,
        colors: true,
      },
    },

    client: {
      logging: 'info', //`errors`/`warnings`
      overlay: true,
      progress: true,
    },

    historyApiFallback: true,
    open: true,
    hot: true,

    host: '127.0.0.1',
    port: 3000,
  },
};
