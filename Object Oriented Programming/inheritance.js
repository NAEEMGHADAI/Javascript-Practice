class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return `I am ` + this.name + `, i will attack with a ` + this.weapon;
	}
}

class Elf extends Character {
	#age = 24;
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
	printAge() {
		return "Age is " + this.#age;
	}
}

class Orge extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}
	makeFort() {
		return "Strongest fort in the world";
	}
}

const peter = new Elf("peter", "bow", "fighter");
console.log(peter instanceof Elf);
console.log(peter.printAge());
console.log(peter.attack());

const shrek = new Orge("Shrek", "club", "green");
console.log(shrek.makeFort());
console.log(shrek.attack());

console.log(Orge.isPrototypeOf(shrek));
console.log(Character.isPrototypeOf(Orge));
console.log(Character.prototype.isPrototypeOf(Orge.prototype));
console.log(shrek instanceof Character);
console.log(Orge.prototype);
