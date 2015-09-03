var webpack = require('webpack'),
  ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: __dirname + '/assets/frontend',
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/assets/frontend/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['6to5'],
        include: [/src\/.*/]
      },
      {
        test: /\.css/,
        loader: ExtractText.extract("style", "css!autoprefixer")
      },
      {
        test: /\.styl$/,
        loader: ExtractText.extract("style", "css!autoprefixer!stylus")
      },
      {
        test: /\.(eot|svg|ttf|png|woff|otf|jpg)$/,
        loaders: ['file']
      }
    ]
  },
  plugins: [
    new ExtractText('style.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin()
  ]
};