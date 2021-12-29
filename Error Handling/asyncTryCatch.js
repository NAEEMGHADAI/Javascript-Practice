(async function () {
	try {
		await Promise.reject("oopsie");
	} catch (err) {
		console.error(err);
	}

	console.log("This is still good!");
})();
