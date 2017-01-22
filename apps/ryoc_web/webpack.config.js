var path = require('path');

module.exports = {
  entry: './web/static/js/app.js',
  output: {
    path: path.join(__dirname, 'priv', 'static', 'js'),
    filename: 'app.js'
  }
};

