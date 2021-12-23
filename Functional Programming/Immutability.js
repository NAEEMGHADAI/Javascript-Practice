//Immutability
const obj = { name: "Andrei" };
function clone(obj) {
	return { ...obj }; // this is pure
}

function updateName(obj) {
	const obj2 = clone(obj);
	obj2.name = "Nana";
	return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);
