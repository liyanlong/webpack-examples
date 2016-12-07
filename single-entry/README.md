# single-entry

> 单文件入口配置 demo

```
module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  }
}
```

## build

`webpack`
