//ASYNC AWAIT

//Syntax
// async function playerStart() {
// 	const first = await movePlayer(100, "Left"); //pause
// 	const second = await movePlayer(400, "Left"); //pause
// 	const third = await movePlayer(10, "Right"); //pause
// 	const fourth = await movePlayer(330, "Left"); //pause
// }

fetch("https://jsonplaceholder.typicode.com/users")
	.then((resp) => resp.json())
	.then(console.log);

async function fetchUser() {
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await resp.json();
	console.log(data);
}

const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/albums",
	"https://jsonplaceholder.typicode.com/posts",
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((resp) => resp.json());
	})
)
	.then((results) => {
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch("Oops")
	.finally(() => console.log("Extra"));

const getData = async function () {
	try {
		const [user, posts, albums] = await Promise.all(
			urls.map(async (url) => {
				const resp = await fetch(url);
				return await resp.json();
			})
		);

		console.log("users", user);
		console.log("posts", posts);
		console.log("albums", albums);
	} catch (err) {
		console.log("Ooops ", err);
	}
};

const urls = [
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/albums",
	"https://jsonplaceholder.typicode.com/posts",
];
const getData2 = async function () {
	const arrayOfPromises = urls.map((url) => fetch(url));
	for await (let req of arrayOfPromises) {
		const data = await req.json();
		console.log(data);
	}
};
