# multip-entries

> 多文件配置, 也可称为 多入口, 多页面文件配置

## CommonsChunkPlugin

`new webpack.optimize.CommonsChunkPlugin(options)`

提取公共文件插件， 将公共使用的模块如 jquery提取到当个文件

**usage**

```
new CommonsChunkPlugin({
  name: "commons",
  // (the commons chunk name)

  filename: "commons.js",
  // (the filename of the commons chunk)

  // minChunks: 3,
  // (Modules must be shared between 3 entries)

  // chunks: ["pageA", "pageB"],
  // (Only use these entries)
})
```

## output

```
Asset       Size  Chunks             Chunk Names
app.js     292 bytes       0  [emitted]  app
search.js  206 bytes       1  [emitted]  search
commons     279 kB       2  [emitted]  commons
```
