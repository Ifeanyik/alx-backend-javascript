const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let userInput = "";
rl.question("Welcome to Holberton School, what is your name?\n", function (string) {
	userInput = string;
	console.log(`Your name is: ${userInput}`);
	console.log("This important software is now closing");
	rl.close();
});
