//Compose

const compose = (f, g) => (data) => f(g(data));
const MultiplyBy3 = (num) => num * 3;
const MakePositive = (num) => Math.abs(num);

const MultiplyBy3AndDoAbsolute = compose(MakePositive, MultiplyBy3);
console.log(MultiplyBy3AndDoAbsolute(-50));
