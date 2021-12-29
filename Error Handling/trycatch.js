function fail() {
	try {
		console.log("this works");
		throw new Error("oopsie");
	} catch (e) {
		console.log("error", e.stack);
	} finally {
		console.log("still good");
		return "returning from fail";
	}
	console.log("never going to get here"); // not reachable
}
console.log(fail());

// try {
// 	try {
// 		something();
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// } catch (error) {
// 	console.log("got it", error);
// }

try {
	setTimeout(function () {
		throw new Error("oppies");
	}, 1000);
} catch (error) {
	console.log("got it", error);
}
