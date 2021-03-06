const webpack = require('webpack');
const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    socket2http: path.join(__dirname, 'client', 'index.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: 'Socket2http',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    host: '0.0.0.0',
    port: 9000,
    noInfo: false,
    hot: true,
    inline: true,
    compress: true
  },
  plugins: []
};
