// Idempotence:
function notGood() {
	return Math.random();
	// new Date();
}

function good() {
	return 5;
}

console.log(notGood());
console.log(good());

console.log(Math.abs(Math.abs(10)));
