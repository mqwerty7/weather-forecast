const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const commonPaths = require('./paths');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require("dotenv-webpack");

const tsLoader = {
  test: /\.(ts|tsx)$/,
  use: 'ts-loader',
  exclude: /node_modules/
};

const babelLoader = {
  test: /\.js$/,
  loader: 'babel-loader'
};

const svgLoader = {
  test: /\.svg$/,
  oneOf: [
    {
      // load svg modules to be displayed as icons/images
      loader: 'svg-react-loader'
    }
  ]
};

const fontLoader = {
  test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
  include: /node_modules/,
  type: 'asset/resource'
};

const imgLoader = {
  test: /\.(png|jpg|jpeg|gif|ico)$/,
  include: /assets/,
  type: 'asset/resource'
};

const cssLoader = {
  test: /\.(css)$/,
  include: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        postcssOptions: {
          config: path.join(__dirname, '../postcss.config.js')
        }
      }
    }
  ]
};

const scssLoader = {
  test: /\.(scss)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: {
          mode: 'local',
          localIdentName: '[name]__[local]__[contenthash:base64:5]'
        }
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        postcssOptions: {
          config: path.join(__dirname, '../postcss.config.js'),
          plugins: () => [postcssPresetEnv()]
        }
      }
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }
  ]
};

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      babelLoader,
      fontLoader,
      imgLoader,
      svgLoader,
      cssLoader,
      scssLoader,
      tsLoader,
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    proxy: {
      '/authorize': {
        target: 'https://pfa.foreca.com',
        changeOrigin: true
      }
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/')
    },
    port: 8081,
    open: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    fallback: {
      crypto: false,
      assert: false,
      stream: false,
      buffer: false,
      https: false,
      http: false,
      zlib: false,
      util: false,
      url: false,
      querystring: false,
      path: false,
      dns: false,
      net: false,
      tls: false,
      fs: false
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
    new MiniCssExtractPlugin({ filename: 'bundle__[contenthash].css' }),
    new Dotenv()
  ]
};
