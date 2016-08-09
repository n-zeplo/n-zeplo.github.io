var webpack = require('webpack');

module.exports = {
  entry: {
    site: './source/javascripts/index.js',
    styles: './source/stylesheets/site.scss'
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },
  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
      },
      {
        test: /.*\.scss$/,
        loader: "style!css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  watch: false

};
