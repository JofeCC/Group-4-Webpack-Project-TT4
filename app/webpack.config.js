const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './scripts/main.js',
      contact: './scripts/contact.js',
      gallery: './scripts/gallery.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test:/\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash][ext]',
          },
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['main'],
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: './contact.html',
        chunks: ['contact'],
        filename: 'contact.html',
      }),
      new HtmlWebpackPlugin({
        template: './gallery.html',
        chunks: ['gallery'],
        filename: 'gallery.html',
      }),
      new HtmlWebpackPlugin({
        template: './gallery.html',
        chunks: ['gallery'],
        filename: 'gallery.html',
      }),
    ],

    devServer: {
      static: './dist',
      port: 9000,
    },
  };