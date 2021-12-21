const fruits = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
fruits.sort();
const toFindDuplicates = (arr) =>
	arr.filter((item, index) => arr.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(fruits);
console.log(duplicateElements);

const arrSet = new Set(duplicateElements);
let setArr = [...arrSet];
console.log(setArr);

let i = 0;
let max = 0;
let count = 0;
while (i < setArr.length) {
	count = 0;
	fruits.forEach((item) => {
		if (setArr[i] === item) {
			count++;
		}
	});
	if (max < count) {
		max = count;
	}
	i++;
}
i = 0;
let flag = 0;
while (i < setArr.length) {
	count = 0;
	for (let index = 0; index < fruits.length; index++) {
		if (setArr[i] === fruits[index]) {
			count++;
		}
		if (count === max) {
			console.log(fruits[index], max);
			break;
		}
	}
	i++;
}
