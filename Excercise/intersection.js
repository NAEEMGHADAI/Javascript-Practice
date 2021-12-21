var num1 = [4, 9, 5];
var num2 = [9, 4, 9, 8, 4];

let intersectionArray = num1.filter((currentElem) => {
	return num2.includes(currentElem);
});

console.log([...new Set(intersectionArray)].reverse());
