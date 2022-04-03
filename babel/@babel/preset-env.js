/** 
 * https://vvbug.blog.csdn.net/article/details/107052867 
 * 文章下面有详细的介绍每个配置项的结果
 * babel源码解析之（@babel/preset-env）
 * https://www.jianshu.com/p/a7490344044f(semver 语义化版本规范)
*/


// babel-preset-env index.ts -> declare
import { declare } from "@babel/helper-plugin-utils";
// 获取 plugins
// babel-compat-data/data/plugins.json preset-env plugins 列表
const compatData = getPluginList(shippedProposals, bugfixes);

// 筛选出 target 需要的插件
// filterItems babel-helper-compilation-targets/src/filter-items
const pluginNames = filterItems(...){
    // isRequired -> targetsSupported
    isRequired(...)
};

// 根据 useBuiltIns 添加 corejs 中的 polyfill 内容
const polyfillPlugins = getPolyfillPlugins({
    useBuiltIns,
    corejs,
    ...
});
getPolyfillPlugins(){
    if (useBuiltIns === "usage" || useBuiltIns === "entry") {
        if (corejs) {
            // babel-plugin-polyfill-corejs3
        }
        if (regenerator) {
            // 代码中是否有generator语法，有就添加addRegeneratorUsagePlugin插件
        }
    }
}

// 获取 babel-compat-data/data/plugins.json 中插件所支持的环境,然后跟当前配置的浏览器环境做比较
targetsSupported(){
    return unsupportedEnvironments.length
}

// TODO declare 里还有一些别的方法没有确认用途

// babel-plugin-transform-classes
import transformClass from "./transformClass";
// 表达式语句
t.expressionStatement(
    // AST Node CallExpression shape
    t.callExpression(classState.file.addHelper("classCallCheck"), [
        t.thisExpression(),
        t.cloneNode(classState.classRef),
    ]),
),
// addHelper packages/babel-helpers/src/helpers.js

return {
    name: "transform-classes",

    visitor: { ...}
}


// babel-plugin-polyfill-corejs3 package.json
import corejs3Polyfills from "core-js-compat/data";
// corejs（proposal）过滤掉“esnext.”打头的插件
const corejs3PolyfillsWithoutProposals = Object.keys(corejs3Polyfills)
    .filter(name => !name.startsWith("esnext."))
    .reduce((memo, key) => {
        memo[key] = corejs3Polyfills[key];
        return memo;
    }, {});

// babel-preset-env shippedProposals
const corejs3PolyfillsWithShippedProposals = corejs3ShippedProposalsList.reduce(
    (memo, key) => {
        memo[key] = corejs3Polyfills[key];
        return memo;
    },
    { ...corejs3PolyfillsWithoutProposals },
);

// 当使用usage的时候，usage-plugin.js是怎样根据代码加载对应的插件的 
// ast节点钩子函数, AST Identifier:{name:"promise"}
ReferencedIdentifier({ node: { name }, scope }: NodePath) {
    if (scope.getBindingIdentifier(name)) return;

    this.addBuiltInDependencies(name);
}

// babel-plugin-transform-runtime / runtime-corejs3-definitions
BuiltIns: { }