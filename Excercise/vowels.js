const chalk = require("chalk");
const findVowelOrNot = () => {
	let char = "A";
	char = char.toLowerCase();
	if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
		console.log(chalk.green("Given Character is a Vowel"));
	} else {
		console.log(chalk.red("Given Character is not a Vowel"));
	}
};
findVowelOrNot();
