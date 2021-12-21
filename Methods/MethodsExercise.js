// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat(3));

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
	["Hello", "young", "grasshopper!"],
	["you", "are"],
	["learning", "fast!"],
];
// greeting.flatMap((x, index) => x + "");
const greeting2 = greeting.map((x) => x.join(" "));

console.log(greeting2);

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap((x) => x.join(" ")).join(" "));
// const greeting3 = greeting2.map((x) => x.join(" "));
// console.log(greeting3);
//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
const userEmail4 = userEmail3.trim();
console.log(userEmail4);

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
const newObject = Object.entries(users);
console.log(Object.entries(users));

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const array2 = Object.entries(users).map((item) => {
// 	return item[1] * 2;
// });

// newObject.forEach((item, index) => {
// 	newObject[index][1] = array2[index];
// });
// console.log(newObject);
updatedUsersArray = newObject.map((user) => [user[0], user[1] * 2]);
console.log(updatedUsersArray);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const retoredObject = Object.fromEntries(updatedUsersArray);
console.log(retoredObject);

console.log(typeof null);
