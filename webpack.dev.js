const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
process.env.NODE_ENV = 'developement';
const config = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    // main: ['react-hot-loader/patch', './index.js'],
    demo: ['react-hot-loader/patch', './entry1.js'],
  },
  output: {
    path: path.join(__dirname, 'src/build'),
    filename: '[name].bundle.js',
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'stylefmt-loader',
              options: {
                config: '.stylelintrc',
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('./plain-report.txt'),
    new webpack.LoaderOptionsPlugin({
      options: {
        devServer: {
          colors: true, 
          historyApiFallback: false,
          inline: true,
          hot: true,
        },
      },
    }),
    new webpack.DefinePlugin({  
      'process.env':{  
        'NODE_ENV': JSON.stringify('development'),
      },
    }), 
    new webpack.BannerPlugin('Author: ZUOQIN HU'),
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      // hash: true,
      // favicon: favicon.ico,
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'commons',
        filename: 'commons.js',
        chunks: ['main', 'demo'],
      }
    ),
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};

module.exports = config;