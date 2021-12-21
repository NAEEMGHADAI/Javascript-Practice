// const date = new Date("1990-10-10").getFullYear();
// console.log(date);
// console.log(Date);

function lastYear() {
	console.log(this);
	return this.getFullYear() - 1;
}

Date.prototype.lastYear = lastYear;
console.log(new Date("1900-10-10").lastYear());

Array.prototype.map = function () {
	let arr = [];
	for (let index = 0; index < this.length; index++) {
		arr.push(this[index] + "map");
	}
	return arr;
};
console.log([1, 2, 3].map());
