// let dragon = {
// 	name: "Tanya",
// 	fire: true,
// 	fight() {
// 		return 5;
// 	},
// 	sing() {
// 		// this is a method
// 		return `I am ${this.name} the breather of dragon.`;
// 	},
// };

// const lizard = {
// 	name: "Kiki",
// 	fight() {
// 		return 1;
// 	},
// };

// lizard.__proto__ = dragon;
// console.log(lizard);
// console.log(dragon.isPrototypeOf(lizard));
// console.log(lizard.sing());
// console.log(dragon.sing());

// function mutliplyBy5(num) {
// 	return num * 5;
// }

// console.log(mutliplyBy5.__proto__);
// console.log(Function.prototype);
// console.log(mutliplyBy5.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(mutliplyBy5.__proto__.__proto__.__proto__);
// console.log(typeof Object);
// console.log(typeof {});

const human = {
	mortal: true,
};

let socrates = Object.create(human);
socrates.age = 45;
console.log(human.isPrototypeOf(socrates));

function mutliplyBy5(num) {
	return num * 5;
}

console.log(mutliplyBy5.prototype);
