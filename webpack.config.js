/*
arberweb
Arber Xhindoli github:@arberx
*/

const webpack = require('webpack');
const path = require('path')

const config = {
    entry:  path.join(__dirname, '/arberweb/js/Index.jsx'),
    output: {
      path: path.join(__dirname, '/arberweb/static/js/'),
      filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ]
          }
        ]
    }
};

module.exports = config;
