# 注意
babel.config.js的其它作用，就是它可以对node_modules和symlinked packages内的文件进行转码。.babelrc.js 不会。

# Primary options
主要用于 babel 的编码 options，用于 babel 包裹的工具以及 babel.transform 参数
#### cwd
Default: process.cwd()
所有代码的的工作目录，process.cwd() 是当前执行node命令时候的文件夹地址，__dirname 是被执行的js 文件的地址 

## Config Loading options
配置文件 options 加载或者目录搜索的配置
#### root
Default: opts.cwd
#### rootMode
Type: "root" | "upward" | "upward-optional"
Default: "root"
upward的作用就是告诉babel从当前的工作目录，向父级文件夹向上查找babel.config.js，如果从上层文件夹找到了babel.config.js，就启用该配置文件，同时把它所在目录作为当前运行的root目录
#### configFile
Default: path.resolve(opts.root, "babel.config.json")。可以配置 false 关闭。
定义如何寻找 babel.config.json 文件。对 .babelrc.json 配置文件无效。
Babel7开始，Babel具有“根”目录的概念，默认为当前工作目录。对于项目范围的配置，Babel将自动在此根目录中搜索babel.config.js。 
或者用户可以使用显式指定 configFile option 来覆盖默认的配置文件搜索行为。
#### babelrcRoots
Default: opts.root
从当前正在编译的文件所在文件夹开始，向上搜索父级文件夹中包含的.babelrc文件（或.babelrc.js文件，以及package.json中babel配置节)，找到则停止搜索。
这种搜索行为找到的配置，如.babelrc 文件，必须位于babel运行的 root 目录下，或者是包含在 babelrcRoots 这个option配置的目录下，否则找到的配置会直接被忽略；
monorepo - babelrcRoots: [
    ".", // Keep the root as a root
    "./packages/*", // Also consider monorepo packages "root" and load their .babelrc.json files.
];

## Output targets
#### targets
定义你的工程准备支持运行的环境
如果 No targets ，Babel 会认为要兼容最古老的浏览器。例如 @babel/preset-env 会把 ES2015-ES2020 都转成 ES5
如果想使用 default ，需要明确的定义 targets 为 defaults { "targets": "defaults" } babel8可能会改
可配置的值：
* targets.esmodules - 可以配置开启 esmodule，<script type="module"></script>
    如果同时配置 browsers 和 esmodules ，会 intersected？？（TODO）
* targets.[node\safari\browsers]
#### browserslistConfigFile & browserslistEnv
Default: true
接受 browserslist 配置文件或者 package.json 中配置 browserslist
  
## Config Merging options
#### extends
可以在子文件夹中继承顶层的 babelrc{ "extends": "../../.babelrc" }