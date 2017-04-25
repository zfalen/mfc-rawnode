var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      './src/index.js']
    },
    output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
    },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
    new ExtractTextPlugin("styles.css"),
  ],
module: {
  loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-1'],
            plugins: ['transform-decorators-legacy', 'transform-object-assign', 'array-includes'],
          },
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader"})}
      ]
    }
};
