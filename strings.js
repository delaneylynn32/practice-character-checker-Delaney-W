const readline = require('readline-sync');
let userName = readline.question("What is your name?");
console.log("Hello," + userName + "!");
let index = readline.questionInt("Enter an index number between 0 and userName.length to find the character: ");
console.log("The character at index " + index + "is:" + userName[index]);