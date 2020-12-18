module.exports = {
    root: true,
    env: {
      "node": true
    },
    extends: [
      "plugin:vue/essential",
      "@vue/standard"
    ],
    parserOptions: {
      "parser": "babel-eslint"
    },
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 强制使用一致的缩进
        indent: 0,
        // 单引号
        quotes: ['error', 'single'],
        // 要求或禁止使用分号而不是 ASI
        semi: ['error', 'never'],
        // 禁止在字符串和注释之外不规则的空白
        'no-irregular-whitespace': 0,
        // 禁用行尾空格
        'no-trailing-spaces': 0,
        // 函数名称或function关键字与开始参数之间允许有空格
        'space-before-function-paren': 0,
        // 不允许在大括号之间留出空格
        'object-curly-spacing': ['error', 'never'],
        // 允许注释//后空白
        'spaced-comment': 0,
        // 允许省略花括号
        curly: 0,
        // 允许只用一个var定义变量
        'one-var': 0,
        'no-sequences': 0,
        'handle-callback-err': 0
    }
}
