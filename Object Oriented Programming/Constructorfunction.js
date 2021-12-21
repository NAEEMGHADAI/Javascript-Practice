// Constructor Function
function Elf(name, weapon) {
	console.log("this: ", this);
	this.name = name;
	this.weapon = weapon;
	console.log("this: ", this);
}

// const Elf = new Function(
// 	"name",
// 	"weapon",
// 	`this.name = name;
// 	this.weapon = weapon;`
// );
Elf.prototype.attack = function () {
	return `attacks with ` + this.weapon;
};

Elf.prototype.build = function () {
	let self = this;
	function building() {
		return self.name + " is buliding a house";
	}
	return building();
};
const peter = new Elf("peter", "stones");
console.log(peter.build());
console.log(peter);
