const validateEmail = require("./validate-email");
const validateText = require("./validate-text");

console.log("Welcome");

const emailIsValid = validateEmail("a@a.net");
console.log(emailIsValid);

const textIsValid1 = validateText("");
console.log(textIsValid1);

const textIsValid2 = validateText("abc", false, 1);
console.log(textIsValid2);

const text1 = "test@gmail.com";
const validateText1 = validateText(text1, false, 10);
if (validateText1) {
  console.log("Text is valid.");
  const validateEmail1 = validateEmail(text1);
  if (validateEmail1) {
    console.log("Email is valid.");
  } else {
    console.log("Email is invalid.");
  }
} else {
  console.log(
    "Text is not valid. Cannot proceed to email validation"
  );
}
