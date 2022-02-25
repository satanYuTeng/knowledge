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
}

function normalizeFile() {
    if (ast) { } else {
        ast = yield * parser(pluginPasses, options, code);
    }
}