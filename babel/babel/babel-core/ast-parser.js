// babel-core
export { parse, parseSync, parseAsync } from "./parse";

const parseRunner = function* parse(code, opts) {
    const config = yield* loadConfig(opts);
    return yield* parser(config.passes, normalizeOptions(config), code);
}


function* parser(
    pluginPasses,
    { parserOpts, highlightCode = true, filename = "unknown" },
    code,
) {
    for (const plugins of pluginPasses) {
        for (const plugin of plugins) {
            const { parserOverride } = plugin;
            if (parserOverride) {
                // 当我们插件中有提供parserOverride方法的时候就直接走我们插件的parserOverride去覆盖babel/parser的解析了
                const ast = parserOverride(code, parserOpts, parse);

                if (ast !== undefined) results.push(ast);
            }
        }
    }
}

// babel-parser/src/index.js

