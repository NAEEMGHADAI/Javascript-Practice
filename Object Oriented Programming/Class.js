class Elf {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return `I am ` + this.name + `, i will attck with a ` + this.weapon;
	}
}

const peter = new Elf("peter", "bow");
console.log(peter instanceof Elf);
console.log(peter.attack());

const obj = {
	name: "xavier",
	fun: function () {
		return "hii";
	},
};

console.log(obj.fun);
