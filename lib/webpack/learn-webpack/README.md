# learn webpack

## 开始

### 安装 webpack

```bash
# 安装
npm install webpack webpack-cli --save-dev

# 检查版本
./node_modules/.bin/webpack -v
```

### npm script 运行 webpack

原理：局部模块安装会在 ./node_modules/.bin 下创建软连接，package.json 可以读取

```json
{
  "build": "webpack"
}
```

## 核心概念

### entry

- 单入口

  ```js
  module.exports = {
    entry: "./src/index.js"
  }
  ```

- 多入口

  ```js
  module.exports = {
    entry: {
      app: "./src/index.js",
      other: "./src/other.js"
    },
  }
  ```

### output

- 单入口，写死名称

  ```js
  module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
  }
  ```

- 多入口，用 [name] 占位符

  ```js
  module.exports = {
    entry: {
      app: "./src/index.js",
      other: "./src/other.js",
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
  }
  ```

### loaders

webpack 只支持 js 和 json 两种文件类型，loader 的作用就是将其他文件类型转化为可依赖的模块。
loader 是一个函数，接受源文件作为参数，转换为有效模块并返回。

```js
module.exports = {
  entry: "./src/index.js",
  output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
  },
  module: {
      rules: [{              // loader 加载规则
          test: /\.txt$/,    // 匹配文件名的正则 
          use: 'raw-loader'  // 使用的 loader 名称
      }]
  }
}
```

### pulgins

用于增强 webpack 的功能，作用于整个构建过程。用于 bundle 文件优化、资源管理、环境变量注入等

```js
module.exports = {
  entry: "./src/index.js",
  output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
  },
  module: {
      // loader 放的地方
      rules: [{              
          test: /\.txt$/,    // 匹配文件名的正则 
          use: 'raw-loader'  // 使用的 loader 名称
      }]
  },
  pulgins: [                 // plugin 放的地方
    new HtmlWebpackPlugin({
      templete: './src/index.html'
    })
  ]
}
```

### mode

wepack 的模式开关，可选值为 development | production | none ，webpack 会开启相应处理。

```js
module.exports = {
  mode: 'development',        // 开发模式
  entry: "./src/index.js",
  output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
  },
  module: {
      // loader 放的地方
      rules: [{              
          test: /\.txt$/,    // 匹配文件名的正则 
          use: 'raw-loader'  // 使用的 loader 名称
      }]
  },
  pulgins: [                 // plugin 放的地方
    new HtmlWebpackPlugin({
      templete: './src/index.html'
    })
  ]
}
```
