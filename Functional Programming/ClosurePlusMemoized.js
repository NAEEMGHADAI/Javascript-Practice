// Closure + Memoization :- We used it here to not make cache in global scope
function Add80() {
	const cache = {};
	return function (n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log("Long Time.....");
			cache[n] = n + 80;
			return cache[n];
		}
	};
}

const memoized = Add80();

console.log(memoized(5));
console.log(memoized(10));
console.log(memoized(5));
console.log(memoized(111));
console.log(memoized(10));
