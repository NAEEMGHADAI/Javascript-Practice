let view;
function intialize() {
	let called = 0;
	return function () {
		if (called > 0) {
			return;
		} else {
			view = "mountains!!!";
			console.log("view created");
			called++;
		}
		return view;
	};
}
const mount = intialize();
console.log(mount());
console.log(mount());
console.log(mount());
