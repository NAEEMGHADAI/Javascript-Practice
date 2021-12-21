const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var index = 0; index < array.length; index++) {
	const timepass = (index) => {
		setTimeout(function () {
			console.log("I am at Index " + index);
		}, 3000);
	};
	timepass(index);
}
