const path = require('path');

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

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
      ident: 'postcss',
    },
  },
];

module.exports = {
  cache: isDev,
  devtool: isDev ? 'cheap-inline-module-sourcemap' : 'hidden',
  entry: './src/index.js',
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
    path: path.join(process.cwd(), 'build'),
    filename: isDev
      ? `${staticJs}/bundle.js`
      : `${staticJs}/[name].[contenthash:8].js`,
    chunkFilename: isDev
      ? `${staticJs}/[name].chunk.js`
      : `${staticJs}/[name].[contenthash:8].chunk.js`,
    publicPath,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      app: path.join(process.cwd(), 'src'),
    },
  },

  optimization: {
    namedChunks: true,
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,

    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  module: {
    strictExportPresence: true,

    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },

      {
        test: /\.(js|ts)x?$/,
        use: 'react-hot-loader/webpack',
      },

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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${staticMedia}/[name].[hash:8].[ext]`,
            },
          },
        ],
      },

      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              // Images larger than 10 KB won’t be inlined
              limit: 10 * 1024,

              // File loader options
              // The fallback loader will receive the same configuration options as url-loader.
              fallback: 'file-loader',
              name: `${staticMedia}/[name].[hash:8].[ext]`,
            },
          },
        ],
      },

      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        // Specify enforce: 'pre' to apply the loader
        // before file-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev,
              mozjpeg: {
                progressive: true,
                quality: 60,
              },
              optipng: { enabled: false },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
      silent: true,
    }),

    new webpack.NamedModulesPlugin(),

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
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: `${staticCss}/[name].[contenthash:8].css`,
        chunkFilename: `${staticCss}/[name].[contenthash:8].chunk.css`,
      }),

    !isDev &&
      new CopyPlugin([
        {
          from: 'public/**/*',
          ignore: ['index.html'],
          flatten: true,
        },
      ]),

    isDev && new webpack.HotModuleReplacementPlugin(),

    new webpack.BannerPlugin({
      banner: `/*! Bundle created at: ${new Date().toJSON()} */\n`,
      raw: true,
      entryOnly: true,
    }),
  ].filter(Boolean),

  devServer: {
    contentBase: './public',
    watchContentBase: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    publicPath,
    open: true,
    hot: true,
    compress: true,
    inline: true,
    stats: {
      warnings: false,
      modules: false,
      hash: false,
      children: false,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
