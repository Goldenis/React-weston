var webpack = require('webpack'),
  ExtractText = require('extract-text-webpack-plugin');

//module.exports = {
//  entry: {
//    app: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/app.jsx'],
//    home: './src/components/home/home.jsx'
//  },
//  output: {
//    path: __dirname + '/assets',
//    filename: '[name].bundle.js',
//    chunkFilname: '[id].bundle.js',
//    publicPath: '/assets/'
//  },
//  module: {
//    loaders: [
//      {
//        test: /\.jsx?$/,
//        loaders: ['react-hot', '6to5'],
//        include: [/src\/.*/]
//      },
//      {
//        test: /\.styl/,
//        loaders: ['style', 'css', 'stylus']
//      }
//    ]
//  },
//  plugins: [
//    new webpack.HotModuleReplacementPlugin()
//  ]
//};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/app.jsx'
  ],
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets/frontend'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', '6to5'],
        include: [/src\/.*/]
      },
      {
        test: /\.css/,
        loader: "style!css!autoprefixer"
      },
      {
        test: /\.styl$/,
        loader: "style!css!autoprefixer!stylus"
      },
      {
        test: /\.(eot|svg|ttf|png|woff|otf|jpg)$/,
        loaders: ['file']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};