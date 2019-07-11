const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const { WebpackPluginServe } = require('webpack-plugin-serve');
const watch = process.env.NODE_ENV === 'development';
module.exports = (env, argv) => {
  const mode = process.env.NODE_ENV || "development";
  const isProduction = mode === "production";
  const watch = mode === 'development';
  return {
    mode: mode,
    devtool: 'cheap-eval-source-map',
    entry: {
      main: [
        path.resolve(__dirname, "src/main.js"),
        'webpack-plugin-serve/client'
      ]
    },
    output: {
      filename: isProduction ? "bundle.[hash].js" : "[name].js",
      path: path.resolve(__dirname, "public"),
      publicPath: '/'
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
          test: /\.css$/i,
          loader: 'css-loader',
          options: {
            importLoaders: true
          },
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new WebpackPluginServe({
        hmr: true,
        historyFallback: true,
        static: [path.resolve(__dirname, "public")],
        host: "localhost",
        port: 8080
      })
    ],
    watch
  }
}
