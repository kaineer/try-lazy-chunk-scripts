// webpack.config.js

const {join} = require('path');

module.exports = () => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'dist')
  }
});
