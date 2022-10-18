const dayjs = require('dayjs');
const a = require('a');

console.log(dayjs().format());
console.log(`From package a: ${a.getMessage()}`);