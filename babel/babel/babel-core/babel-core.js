// index.js
export { transform, transformSync, transformAsync } from "./transform";

// transform.js
// transform -> transformRunner.errback(code, opts, callback);
transformRunner(){
    transform(){
        config = loadConfig(opts)
    };
};

transformFileRunner(){
    // 加载配置文件
    const config = yield * loadConfig(options);
    // 编译
    return yield * run(config, code);
}
/** 
 * 加载配置顺序
 * loadConfig -> loadFullConfig -> loadPrivatePartialConfig -> buildRootChain -> findRootConfig -> ROOT_CONFIG_FILENAMES
*/
function* loadFullConfig(inputOpts) {
    // inputOpts https://www.babeljs.cn/docs/options
    // plugin preset 只是配置中的很小一部分
    const result = yield* loadPrivatePartialConfig(inputOpts);

}

/** 
 * import { run } from "./transformation";
*/
function run(config, code, ast) {
    const file = yield * normalizeFile(
        config.passes,
        normalizeOptions(config),
        code,
        ast,
    );
    // 执行转换操作
    yield * transformFile(file, config.passes);
    // babel-generator
    // Babel Generator模块是 Babel 的代码生成器，它读取AST并将其转换为代码和源码映射（sourcemaps）。
    ({ outputCode, outputMap } = generateCode(config.passes, file));
}

function normalizeFile() {
    if (ast) { } else {
        // 传入不是ast的话，就会通过parser方法去获取一个ast,ast-parser
        ast = yield * parser(pluginPasses, options, code);
    }
}

function* transformFile(file, pluginPasses) {
    // 遍历所有的插件，获取插件的visitor属性，然后传给visitors
    for (const plugin of pluginPairs.concat([loadBlockHoistPlugin()])) {
        const pass = new PluginPass(file, plugin.key, plugin.options);

        passPairs.push([plugin, pass]);
        passes.push(pass);
        visitors.push(plugin.visitor);
    }
}

export default function loadBlockHoistPlugin() {
    LOADED_PLUGIN = new Plugin(
        {
            ...blockHoistPlugin,
            // Babel Traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点
            visitor: traverse.explode(blockHoistPlugin.visitor),
        },
        {},
    );

}