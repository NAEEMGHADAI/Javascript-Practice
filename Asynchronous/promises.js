const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("Stuff Worked");
	} else {
		reject("Error, it broke");
	}
});

promise
	.then((result) => result + "!")
	.then((result2) => {
		throw Error;
		console.log(result2);
	})
	.catch(() => {
		console.log("error!");
	});

const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("Stuff Worked");
	} else {
		reject("Error, it broke");
	}
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Hii");
});
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "Hii2");
});
const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, "Hii3");
});

Promise.all([promise, promise2, promise3, promise4]).then((value) => {
	console.log(value);
});

const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/albums",
	"https://jsonplaceholder.typicode.com/posts",
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((resp) => resp.json());
	})
).then((results) => {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
});
