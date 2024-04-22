# WebPack性能优化
<link rel="stylesheet" type="text/css" href="styles.css" ></link>

## 加快打包速度
### 使用 `speed-measure-webpack-plugin` 插件测量打包速度
使用 <a class='no-underline' href='https://github.com/stephencookdev/speed-measure-webpack-plugin' >`speed-measure-webpack-plugin`</a> 插件可以测量各个**插件**和 **loader**所花费的时间，量化打包速度，对比前后的信息，判断优化效果。
```js
//webpack.config.js
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const config = {
    //...webpack配置，不用在写 module.exports
}

module.exports = smp.wrap(config);
```
### 缩小文件的搜索范围
**作用：**
1. **提高构建速度**：通过缩小模块搜索的范围，Webpack 可以更快地找到所需的模块文件，从而提高构建的速度。默认情况下，Webpack会在项目根目录下的 `node_modules`目录以及`webpack.config.js` 文件所在目录下搜索模块，但是这个范围可能会很大，特别是在大型项目中，通过设置搜索范围可以避免不必要的遍历和查找，加快构建速度。

2. **减少不必要的查找**：在开发过程中，经常会引入各种第三方库或者自定义模块，如果不设置搜索范围，Webpack 可能会在很多目录下进行模块查找，导致效率低下。通过设置搜索范围，可以减少不必要的查找，提高开发效率。

3. **避免命名冲突**：在多个模块目录下可能存在相同名称的模块，设置搜索范围可以明确告诉 Webpack 哪些目录下的模块优先级更高，避免命名冲突问题。


*配置`include/exclude`、`resolve.modules`、`resolve.mainFields`、 `alias` 、`noParse` 、`extensions`*
- *`include/exclude`*
  

  在使用 `Loader` 时可以通过 `test`、 `include` 、 `exclude` 三个配置项来命中 `Loader` 要应用规则的文件。 为了尽可能少的让文件被 `Loader` 处理，可以通过 `include` 去命中只有哪些文件需要被处理。
<br/>

  `exclude` 指定要排除的文件，`include` 指定要包含的文件。`exclude` 的优先级高于 `include`，在 `include` 和 `exclude` 中使用绝对路径数组，尽量避免 `exclude`，更倾向于使用 include。

```js
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        // 如果项目源码中只有 js 文件就不要写成 /\.jsx?$/，提升正则表达式性能
        test: /\.js$/,
        // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
        use: ['babel-loader?cacheDirectory'],
        // 只对项目根目录下的 src 目录中的文件采用 babel-loader
        include: path.resolve(__dirname, 'src'),
      },
    ]
  },
};
```
- 优化 resolve.modules 配置
使用 `resolve` 配置 webpack 去哪些目录下寻找第三方模块
当安装的第三方模块都放在项目根目录下的 ./node_modules 目录下时，没有必要按照默认的方式去一层层的寻找，可以指明存放第三方模块的绝对路径，以减少寻找，配置如下：
```js
const path = require('path');
module.exports = {
  //...
  resolve: {
  // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
  // 其中 __dirname 表示当前工作目录，也就是项目根目录
     modules: [path.resolve(__dirname, 'node_modules')],
  }
}
```
- 优化 resolve.mainFields 配置

`resolve.mainFields` 用于配置第三方模块使用哪个入口文件
为了减少搜索步骤，在你明确第三方模块的入口文件描述字段时，你可以把它设置的尽量少。 由于大多数第三方模块都采用 main 或 index 字段去描述入口文件的位置，可以这样配置 Webpack

```js
module.exports = {
  resolve: {
    // 采用 main 或 index 字段作为入口文件描述字段，以减少搜索步骤
    mainFields: ['main', 'index'],
  },
};
```
 :warning:  **这个配置一般很较少用，要注意所有第三方模块的入口文件**

- `resolve.alias`
resolve.alias 配置项以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径.
```js
// Webpack alias 配置
resolve:{
  alias:{
    components: './src/components/'
  }
}
```
当你通过 `import Button from 'components/button'` 导入时，实际上被 `alias` 等价替换成了 `import Button from './src/components/button'`。
默认情况下 Webpack 会从入口文件 `./node_modules/react/react.js` 开始递归的解析和处理依赖的几十个文件，这会时一个耗时的操作。 通过配置 `resolve.alias` 可以让 Webpack 在处理 `React` 库时，直接使用单独完整的 `react.min.js` 文件，从而跳过耗时的递归解析操作:

```js
module.exports = {
  resolve: {
    // 使用 alias 把导入 react 的语句换成直接使用单独完整的 react.min.js 文件，
    // 减少耗时的递归解析操作
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js'), // react15
      // 'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'), // react16
    }
  },
};
```
除了 React 库外，大多数库发布到 Npm 仓库中时都会包含打包好的完整文件，对于这些库你也可以对它们配置 alias。

但是对于有些库使用本优化方法后会影响到后面要讲的使用 Tree-Shaking 去除无效代码的优化，因为打包好的完整文件中有部分代码你的项目可能永远用不上。 一般对整体性比较强的库采用本方法优化，因为完整文件中的代码是一个整体，每一行都是不可或缺的。 但是对于一些工具类的库，例如 `lodash`，你的项目可能只用到了其中几个工具函数，你就不能使用本方法去优化，因为这会导致你的输出代码中包含很多永远不会执行的代码。

alias 还支持 $ 符号来缩小范围到只命中以关键字结尾的导入语句：
```js
resolve:{
  alias:{
    'react$': '/path/to/react.min.js'
  }
}
```

react$ 只会命中以 react 结尾的导入语句，即只会把 `import 'react' `关键字替换成 `import '/path/to/react.min.js'`。

- `noParse`
如果一些第三方模块没有 `AMD/CommonJS` 规范版本，可以使用 `noParse` 来标识这个模块，这样 Webpack 会引入这些模块，但是不进行转化和解析，从而提升 Webpack 的构建性能 ，例如：`jquery `、`lodash`。

在上面的 优化 `resolve.alias` 配置 中讲到单独完整的react.min.js文件就没有采用模块化，让我们来通过配置 `module.noParse` 忽略对 react.min.js 文件的递归解析处理， 相关 Webpack 配置如下：
```js
const path = require('path');

module.exports = {
  module: {
    // 独完整的 `react.min.js` 文件就没有采用模块化，忽略对 `react.min.js` 文件的递归解析处理
	// noParse 属性的值是一个正则表达式或者是一个 function
    noParse: [/react\.min\.js$/] // /jquery|lodash/
  },
};
```
- `resolve.extensions`
webpack 会根据 `extensions` 定义的后缀查找文件(**频率较高的文件类型优先写在前面**)， 默认是 `extensions: ['.js', '.json']`
也就是说当遇到 `require('./data') `这样的导入语句时，Webpack 会先去寻找 `./data.js` 文件，如果该文件不存在就去寻找 `./data.json` 文件，如果还是找不到就报错。
如果这个列表越长，或者正确的后缀在越后面，就会造成尝试的次数越多，所以 `resolve.extensions` 的配置也会影响到构建的性能。 在配置 `resolve.extensions` 时你需要遵守以下几点，以做到尽可能的优化构建性能：
1. 后缀尝试列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中
2. 频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程
3. 在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。例如在你确定的情况下把 `require('./data')` 写成 `require('./data.json')`
```js
module.exports = {
  resolve: {
    // 尽可能的减少后缀尝试的可能性
    extensions: ['js'],
  },
};
```
### 使用<a href='https://github.com/webpack-contrib/cache-loader'>`cache-loader`</a> ，将结果缓存中磁盘中
在一些性能开销较大的 loader 之前添加 `cache-loader`，将结果缓存中磁盘中。默认保存在 `node_modueles/.cache/cache-loader` 目录下。它所做的事情很简单，就是 babel-loader 开启 cache 后做的事情，将 loader 的编译结果写入硬盘缓存。再次构建会先比较一下，如果文件较之前的没有发生变化则会直接使用缓存。

cache-loader 的配置很简单，放在其他 loader 之前即可。修改Webpack 的配置如下:
```js
module.exports = {
  module: {
    // 例如 babel-loader 耗时比较长，给它配置 cache-loader 放在 loader 之前
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader','babel-loader']
      }
    ]
  }
}
```
如果只打算给 babel-loader 配置 cache 的话，也可以不使用 cache-loader，给 babel-loader 增加选项 `cacheDirectory`。
`cacheDirectory`：默认值为 false。当设置为 true 时，指定的目录将用来缓存 loader 的执行结果。之后的 Webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程。使用默认缓存目录：node_modules/.cache/babel-loader
```js
loader: 'babel-loader?cacheDirectory=true'
```

### 使用 <a href='https://github.com/amireh/happypack'>`happypac`</a>开启多进程打包

受限于 Node 是单线程运行的，所以 Webpack 在打包的过程中也是单线程的，特别是在执行 Loader 的时候，解析转换以及代码的压缩中的时间很长，这样就会导致构建时间变长。

HappyPack 的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中，从而减少总的构建时间:

```js
const Happypack = require('happypack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'Happypack/loader?id=js',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        use: 'Happypack/loader?id=css',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist')
        ]
      }
    ]
  },
  plugins: [
    new Happypack({
      id: 'js', // 和rule中的 id=js 对应
      // 将之前 rule 中的 loader 删除，在此配置
      use: ['babel-loader'] //必须是数组
    }),
    new Happypack({
      id: 'css',// 和rule中的 id=css 对应
      use: ['style-loader', 'css-loader','postcss-loader'],
    })
  ]
}
```
<a href='https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-3%E4%BD%BF%E7%94%A8HappyPack.html'>深入浅出WebPack 使用HappyPack</a>

### <a href='https://github.com/webpack-contrib/thread-loader'>`thread-loader`</a>
除了使用 Happypack 外，我们也可以使用 thread-loader ，把 thread-loader 放置在其它 loader 之前，那么放置在这个 loader 之后的 loader 就会在一个单独的 worker 池中运行。

在 worker 池(worker pool)中运行的 loader 是受到限制的。例如：
- 这些 loader 不能产生新的文件。

- 这些 loader 不能使用定制的 loader API（也就是说，通过插件）。

- 这些 loader 无法获取 webpack 的选项设置。
```js
module.exports = {
  module: {
    // 配置 thread-loader 放在所有 loader 之前（包括 cache-loader）
    rules: [
      {
        test: /\.jsx?$/,
        use: ['thread-loader', 'cache-loader', 'babel-loader']
      }
    ]
  }
}
```

## 减少打包体积