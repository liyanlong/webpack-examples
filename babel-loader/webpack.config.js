module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: './dist',
    filename: 'esun.js',
    library: 'Esun',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
