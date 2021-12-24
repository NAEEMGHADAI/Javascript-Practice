//Pipe

const compose = (f, g) => (data) => g(f(data));
const MultiplyBy3 = (num) => num * 3;
const MakePositive = (num) => Math.abs(num);

const MultiplyBy3AndDoAbsolute = compose(MultiplyBy3, MakePositive);
console.log(MultiplyBy3AndDoAbsolute(-50));
