var path = require('path');

module.exports = {
  entry: './web/static/js/app.js',
  output: {
    path: path.join(__dirname, 'priv', 'static', 'js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [ "node_modules", __dirname + "/web/static/js" ]
  }
};

