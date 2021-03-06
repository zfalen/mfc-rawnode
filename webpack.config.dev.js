var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: ['webpack-hot-middleware/client',
    './src/index.js']
    },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['react-hot-loader', { loader: 'babel-loader', options: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-decorators-legacy', 'transform-object-assign', 'array-includes'],
          }}
          ],
        },
        { test: /\.css$/, use: "style-loader!css-loader" },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
};
