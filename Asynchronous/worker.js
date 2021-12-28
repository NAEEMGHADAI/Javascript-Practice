onmessage = function (e) {
	let result = 0;
	for (let index = 0; index < 10000000000; index++) {
		result = result + index;
	}
	console.log("done");
	postMessage(result);
};

console.log(self);
console.log(document);
console.log(window);
