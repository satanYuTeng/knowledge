const package = {
    "dependencies": {
        "@ampproject/remapping": "^2.1.0",
        "@babel/code-frame": "workspace:^", // yarn workspace monorepo 共享依赖
        "@babel/generator": "workspace:^",
        "@babel/helper-compilation-targets": "workspace:^",
        "@babel/helper-module-transforms": "condition:BABEL_8_BREAKING ? : workspace:^7.16.7",
        "@babel/helpers": "workspace:^",
        "@babel/parser": "workspace:^",
        "@babel/template": "workspace:^",
        "@babel/traverse": "workspace:^",
        "@babel/types": "workspace:^",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "condition:BABEL_8_BREAKING ? ^7.3.4 : ^6.3.0"
    },
    "devDependencies": {
        "@babel/helper-transform-fixture-test-runner": "workspace:^",
        "@babel/plugin-transform-modules-commonjs": "workspace:^",
        "@jridgewell/trace-mapping": "^0.3.4",
        "@types/convert-source-map": "^1.5.1",
        "@types/debug": "^4.1.0",
        "@types/resolve": "^1.3.2",
        "@types/semver": "^5.4.0"
    },
}