var database = [
	{
		username: "andre",
		password: "supersecret",
	},
	{
		username: "naeem",
		password: "coding",
	},
	{
		username: "mohammed",
		password: "coding123",
	},
	{
		username: "mohammed123",
		password: "coding1234",
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!",
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!",
	},
];

var userNamePrompt = prompt("What's your username?");

var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	for (var i = 0; i < newsFeed.length; i++) {
		if (isUserValid(user, pass)) {
			console.log(newsFeed);
			document.getElementById("newsFeedtimeline").innerHTML =
				newsFeed[i].timeline;
			document.getElementById("newsFeedusername").innerHTML =
				newsFeed[i].username;
		}
	}
	if (!isUserValid(user, pass)) {
		alert("Sorry, wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);
