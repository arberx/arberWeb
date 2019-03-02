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
          }
        ]
    }
};

module.exports = config;
