const path = require('path')
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 3000

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
module.exports = {
  entry: {
    app: [
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: DEV_PORT
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
        ]
      }
    ]
  },
  plugins: []
}
