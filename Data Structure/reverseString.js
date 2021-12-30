function reverse(str) {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "Thats not Good";
	}
	let i = 0;
	const element = [];
	for (let index = str.length - 1; index >= 0; index--) {
		element[i] = str[index];
		i++;
	}
	return element.join("");
}

function reverse2(str) {
	return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

const reverseString = reverse("Hi Who Goes There!");
console.log(reverseString);

const reverseString2 = reverse2("Hi Who Goes There!");
console.log(reverseString2);

const reverseString3 = reverse3("Hi Who Goes There!");
console.log(reverseString3);
