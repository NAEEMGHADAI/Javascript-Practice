//Factory Function
// function createElf(name, weapon) {
// 	return {
// 		name: name,
// 		weapon: weapon,
// 		attack() {
// 			return `I am ` + name + `, i will attck with a ` + weapon;
// 		},
// 	};
// }

const elfAttack = {
	attack() {
		return `I am ` + this.name + `, i will attck with a ` + this.weapon;
	},
};
function createElf(name, weapon) {
	return {
		name: name,
		weapon: weapon,
	};
}
const peter = createElf("peter", "bow");
peter.attack = elfAttack.attack;
console.log(peter.attack());
