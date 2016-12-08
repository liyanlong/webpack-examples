var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    main: './src/main.js',
    docs: './src/docs.js',
    vendor: ['jquery', 'underscore']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js',
      minChunks: Infinity 
    })
  ]
};
