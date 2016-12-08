# `babel-loader`

> es6语法解析器， 提前使用下一代 javascript 语法

## install

```
npm install babel-loader babel-core babel-preset-es2015 webpack --save-dev
```

```javascript
module.exports = {
  //...
  ,
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        // loader
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
```
