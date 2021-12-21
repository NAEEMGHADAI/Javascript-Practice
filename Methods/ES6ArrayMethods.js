const array = [10, 2, 4, 6, 10];
let text = "";
const newArray = array.forEach(function (item, index) {
	text += index + ": " + item + " ";
});
console.log(text);

const newArray2 = array.map(function (item) {
	return item * 2;
});
console.log(newArray2);

const sum = array.reduce(function (total, next) {
	console.log("total: ", total, "next: ", next);
	return total + next;
	// return elem > 4;
});
console.log("Sum: " + sum);

const newArray3 = array.filter(function (item) {
	return item > 4;
});
console.log("filterArray: ", newArray3);

const newArray4 = array.find(function (item) {
	return item > 4;
});
console.log("findArray: ", newArray4);

const newArray5 = array.findIndex(function (item) {
	return item == 2;
});
console.log("findIndexArray: ", newArray5);
