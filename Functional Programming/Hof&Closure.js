//HOF
const hof = (fn) => fn(5);
hof(function a(x) {
	return x;
});
//Closure
const closure = function () {
	let count = 55;
	return function getCounter() {
		return count;
	};
};
//Closure can be used for data privacy as we cannot access count which is a outer variable directly
const getCounter = closure();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());
