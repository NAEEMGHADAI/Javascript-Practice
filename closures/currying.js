const chalk = require("chalk");

const getSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
const total = getSum(5)(4)(3)(2)(1);
console.log(chalk.green(total));
