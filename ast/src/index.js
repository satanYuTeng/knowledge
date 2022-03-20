const babel = require('@babel/core');
const code = `const fn = (a, b) => a + b`; // 转换后 const fn = function(a, b) { return a + b }
const arrowFnPlugin = {
  // 访问者模式
  visitor: {
    // 当访问到某个路径的时候进行匹配
    ArrowFunctionExpression(path) {
      // 拿到节点
      const node = path.node;
      console.log('ArrowFunctionExpression -> node', node);
    },
  },
};

const r = babel.parseSync(code, {
  plugins: [arrowFnPlugin],
});

console.log(r);