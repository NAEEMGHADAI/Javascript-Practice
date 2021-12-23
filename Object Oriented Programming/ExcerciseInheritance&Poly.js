class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return "atack with " + this.weapon;
	}
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
class Queen extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);

		this.type = type;
	}
	attack() {
		console.log(super.attack());
		console.log(
			"I am the " + this.name + " of " + this.type + ", now bow down to me!"
		);
		return `I am the ${this.name} of ${this.type}, now bow down to me!`;
	}
}
const victoria = new Queen("Victoria", "army", "hearts"); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack(); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
