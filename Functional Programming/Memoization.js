//learn to cache
function addTo80(n) {
	console.log("Long Time......");
	return n + 80;
}

console.log("Without Cache..");
console.log(addTo80(5));
console.log(addTo80(5));
console.log(" ");

console.log("With Cache..");
const cache = {};
function Add80(n) {
	if (n in cache) {
		return cache[n];
	} else {
		console.log("Long Time.....");
		cache[n] = n + 80;
		return cache[n];
	}
}

console.log(Add80(5));
console.log(Add80(10));
console.log(Add80(5));
console.log(Add80(111));
console.log(Add80(10));

console.log(cache);
