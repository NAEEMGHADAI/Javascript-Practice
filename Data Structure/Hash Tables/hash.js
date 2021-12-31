let user = {
	age: 54,
	name: "Kylie",
	magic: true,
	scream: function () {
		console.log("ahhhhhh!!!");
	},
};

console.log(user.age); //O(1)
console.log((user.spell = "abra kadabra")); //O(1)
console.log(user);
user.scream(); //O(1)

//O(N) (delete and find) when collision occurs
//Map --> Gives you some order
//Set --> No duplicate keys
