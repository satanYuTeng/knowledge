/** 
 * https://www.jianshu.com/p/50e8a508ccc4
 * babel源码解析之（@babel/plugin-transform-runtime）
 * 抽离babel的一些公共工具类(helper code)用来减少代码的大小
 * runtime不做语法的转换，它只能算是一个转换帮助类、一个自动添加polyfill的工具
 * 
 * @babel/runtime
 * corejs
 * core-js-pure
 * 
*/
// 添加regenerator函数的polyfill防止全局污染
// 注入 regeneratorRuntime 对象
import _pluginRegenerator from "babel-plugin-polyfill-regenerator";

// babel-plugin-polyfill-regenerator
visitor: {
    ReferencedIdentifier(path) {
        const {
            node,
            parent,
            scope
        } = path;
        const {
            name
        } = node;
        //如果有generator函数并且useRuntimeRegenerator设置为true的时候就添加generatorRuntime的polyfill，
        // @babel/runtime-corejs3/regenerator
        if (name === "regeneratorRuntime" && useRuntimeRegenerator) {
            path.replaceWith(this.addDefaultImport(`${modulePath}/regenerator`, "regeneratorRuntime"));
            return;
        }
        //corejs为false就不添加polyfill直接返回
        if (!injectCoreJS) return
        if (_core.types.isMemberExpression(parent)) return;
        //看当前corejs中有没有“Promise”的垫片polyfill
        if (!hasMapping(BuiltIns, name)) return;
        if (scope.getBindingIdentifier(name)) return;
        //添加promise polyfill路径为
        //"@babel/runtime-corejs3/core-js-stable/promise"       
        path.replaceWith(this.addDefaultImport(`${modulePath}/${corejsRoot}/${BuiltIns[name].path}`, name));
    }
}

/** 
 * api
 * options - 插件配置
 * dirname
*/
export default declare((api, options, dirname) => {
    const {
        corejs,
        helpers: useRuntimeHelpers = true,
        regenerator: useRuntimeRegenerator = true,
        useESModules = false,
        version: runtimeVersion = "7.0.0-beta.0",
        absoluteRuntime = false,
    } = options;


    const moduleName = injectCoreJS3
        ? "@babel/runtime-corejs3"
        : injectCoreJS2
            ? "@babel/runtime-corejs2"
            : "@babel/runtime";


    return {
        name: "transform-runtime",

        inherits: createCorejsPlgin(), // _pluginRegenerator
        pre(file) {
            // ??
            const blockHoist =
                isInteropHelper && !isModule(file.path) ? 4 : undefined;
            // help 路径
            const helpersDir =
                esModules && file.path.node.sourceType === "module"
                    ? "helpers/esm"
                    : "helpers";
            // If something on the page adds a helper when the file is an ES6
            // file, we can't reused the cached helper name after things have been
            // transformed because it has almost certainly been renamed.
            // 这注释啥意思？？
            addDefaultImport()
        }
    }