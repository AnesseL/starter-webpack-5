const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyPlugin  =  require ( "copy-webpack-plugin" );
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/javascript/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "../src/images", to: "../dist/images" }
      ],
    })
  ]
};