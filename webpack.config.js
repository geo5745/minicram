const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/minicram.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devtool: 'source-map'
};