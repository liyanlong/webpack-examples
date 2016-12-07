# webpack-examples simple

> 关于如何运行 webpack

**命令行模式**

```
webapck app.js dist/app.bundle.js
cd dist
node app.bundle.js
```

**配置文件模式**

```
module.exports = {
  entry: './app.js',
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  }
};
```

关于 entry 的 配置

`entry: 'xxx.js' => entry: { main: 'xxx.js' }`

```
webpack
node dist/main.bundle.js
```

**nodejs API 模式**

```
export NODE_PATH = 'GLOBAL_NODE_PATH'
cd simple
node build/client.js
```

**How To Get GLOBAL_NODE_PATH ?**

`npm config list | grep prefix`
