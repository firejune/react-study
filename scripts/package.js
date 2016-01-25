const webpack = require('webpack');
const RELEASE = process.argv.indexOf('--release') !== -1;

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: './'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: RELEASE ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
