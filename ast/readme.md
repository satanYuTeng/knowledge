# 理论
## 什么是 AST
首先一段代码转换成的抽象语法树是一个对象，该对象会有一个顶级的 type 属性 Program；第二个属性是 body 是一个数组。

body 数组中存放的每一项都是一个对象，里面包含了所有的对于该语句的描述信息

type:         描述该语句的类型  --> 变量声明的语句
kind:         变量声明的关键字  --> var
declaration:  声明内容的数组，里面每一项也是一个对象
            type: 描述该语句的类型
            id:   描述变量名称的对象
                type: 定义
                name: 变量的名字
            init: 初始化变量值的对象
                type:   类型
                value:  值 "is tree" 不带引号
                row:    "\"is tree"\" 带引号

## 词法分析和语法分析

# 实战
# 参考
[一文助你搞懂AST](https://segmentfault.com/a/1190000023389980)
https://astexplorer.net/
http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/
https://juejin.cn/post/6844903749660442638