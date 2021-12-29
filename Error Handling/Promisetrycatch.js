// Promise.resolve("asyncFail")
// 	.then((resp) => {
// 		throw new Error("#1 Fail");
// 		return resp;
// 	})
// 	.then((resp) => {
// 		console.log(resp);
// 	})
// 	.catch((err) => {
// 		return err;
// 	})
// 	.then((resp) => {
// 		console.log(resp.message);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

Promise.resolve("asyncfail")
	.then((response) => {
		console.log(response);
		throw new Error("#1 fail");
	})
	.catch((err) => {
		console.error("error", err.message);
	})
	.then((response) => {
		console.log("hi am I still needed?", response);
		return "done";
	})
	.catch((err) => {
		console.error(err);
		return "failed";
	});
