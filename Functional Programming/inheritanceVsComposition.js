//composion
//What it has

function getAttack(character) {
	return Object.assign({}, character, {
		attackFn: function () {
			return `I attack with ${wea}`;
		},
	});
}

function Elf(name, weapon, type) {
	let elf = {
		name,
		weapon,
		type,
	};
	const wea = "bow";
	console.log(elf.name);
	return getAttack(Elf);
}

const Aisha = Elf("Aisha", "Bow", "Proud Elf");
console.log(Aisha.attackFn());

//Inheritance
//What it is
