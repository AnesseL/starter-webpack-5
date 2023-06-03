const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/javascript/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
            // Creates `style` nodes from JS strings (plugin instead of "style-loader")
            loader: "style-loader",
            options: {}
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader',
            options: {}
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Prefer `dart-sass`
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../src/index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: "../src/images",
        to: "../dist/images"
      }],
    })
  ]
};