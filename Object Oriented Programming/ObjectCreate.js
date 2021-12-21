//Object.create()

const elfAttack = {
	attack() {
		return `I am ` + this.name + `, i will attck with a ` + this.weapon;
	},
};
function createElf(name, weapon) {
	let newElf = Object.create(elfAttack);
	newElf.name = name;
	newElf.weapon = weapon;
	console.log(newElf.__proto__);
	console.log(newElf);
	return newElf;
}
const peter = createElf("peter", "bow");
// peter.attack = elfAttack.attack;
console.log(peter.attack());
