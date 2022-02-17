const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS!
          "sass-loader",
        ],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
    }),

    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, './src/pages'), to: path.resolve(__dirname, 'dist') },
    //   ],
    // }),
  ],
};