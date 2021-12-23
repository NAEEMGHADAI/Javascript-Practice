//Side effects:
// const array = [1,2,3];
// function mutateArray(arr) {
//   arr.pop()
// }
// function mutateArray2(arr) {
//   arr.forEach(item => arr.push(1
//   ))
// }
// //The order of the function calls will matter.
// mutateArray(array)
// mutateArray2(array)
// array

// map and concat methods can fix this issue of mutation

const array = [1, 2, 3];
function RemoveElement(arr) {
	const Array = [].concat(arr);
	Array.pop();
	return Array;
}

const mutateArray = RemoveElement(array);
console.log(mutateArray);

function MultiplyBy2(arr) {
	return arr.map((item) => item * 2);
}

const mutateArray2 = MultiplyBy2(array);
console.log(mutateArray2);

console.log(array);
