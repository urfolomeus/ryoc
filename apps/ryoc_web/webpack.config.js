var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './web/static/js/index.js',
  output: {
    path: path.join(__dirname, 'priv', 'static', 'js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css')
  ],
  resolve: {
    modules: [ 'node_modules', __dirname + '/web/static/js' ]
  }
};
