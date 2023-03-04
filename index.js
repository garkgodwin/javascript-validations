const validateEmail = require("./validate-email");
const validateText = require("./validate-text");

console.log("Welcome");

const emailIsValid = validateEmail("a@a.net");
console.log(emailIsValid);

const textIsValid1 = validateText("");
console.log(textIsValid1);

const textIsValid2 = validateText("abc", false, 1);
console.log(textIsValid2);
