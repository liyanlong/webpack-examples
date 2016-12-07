module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  }
}
