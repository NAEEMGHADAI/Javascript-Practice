function nthlargest(arr, highest) {
	arr.sort((a, b) => {
		return a - b;
	});

	return arr[arr.length - highest];
}

const arr = [43, 59, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
