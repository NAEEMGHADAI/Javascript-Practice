var works = ["cleaning", "cooking", "gardening", "painting", "plumbing"];

var length = works.length;
for (var i = 0; i < length; i++) {
	// console.log(works.length);
	// works.pop();
	console.log(i);
}
// console.log(works);
// console.log(i);

function logWork(work, index) {
	console.log(work);
	console.log(index);
}
works.forEach(logWork);
