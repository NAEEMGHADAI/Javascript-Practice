function heavyDuty() {
	const bigArray = new Array(5000).fill("hii");
	console.log("Created!!!");
	return function (index) {
		return bigArray[index];
	};
}

const copy = heavyDuty();

console.log(copy(400));
console.log(copy(400));
console.log(copy(400));
console.log(copy(400));
