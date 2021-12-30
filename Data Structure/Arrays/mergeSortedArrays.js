function mergeSortedArrays(Array1, Array2) {
	if (Array1.length === 0) {
		return Array2;
	}
	if (Array2.length === 0) {
		return Array1;
	}
	Array2.forEach((element) => {
		Array1.push(element);
	});
	const sort = Array1.sort((a, b) => a - b);
	return sort;
}

function mergeSortedArrays2(Array1, Array2) {
	if (Array1.length === 0) {
		return Array2;
	}
	if (Array2.length === 0) {
		return Array1;
	}
	let i = 0;
	let j = 0;
	const tempArray = [];
	let temp = 0;
	while (i < Array1.length && j < Array2.length) {
		if (Array1[i] > Array2[j]) {
			tempArray[temp] = Array2[j];
			j = j + 1;
			temp++;
		} else {
			tempArray[temp] = Array1[i];
			i = i + 1;
			temp++;
		}
	}
	while (i != Array1.length) {
		tempArray[temp] = Array1[i];
		i = i + 1;
		temp++;
	}
	while (j != Array2.length) {
		tempArray[temp] = Array2[j];
		j = j + 1;
		temp++;
	}
	return tempArray;
}

function mergeSortedArrays3(array1, array2) {
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	//We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		if (array2Item === undefined || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}

const merged = mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30, 32]);
console.log(merged);

const merged2 = mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30, 32]);
console.log(merged2);

const merged3 = mergeSortedArrays3([0, 3, 4, 31], [3, 4, 6, 30, 32]);
console.log(merged3);
