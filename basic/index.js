const dayjs = require('dayjs');
// 引用嵌套子包后，需要在项目根目录中执行 pnpm install 方可使用
const a = require('a');
const b = require('b');

console.log(dayjs().format());
console.log(`From package a: ${a.getMessage()}`);
console.log(`From package b: ${b.getMessage()}`);
