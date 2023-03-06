const validateEmail = require("./validate-email");
const validateText = require("./validate-text");
/**
 * This function will return a boolean of true or false.
 * @param {!string} type type will be email, plain or number
 * @param {!string} email email to be validated.
 * @param {!string} text any text you want.
 * @param {!boolean} allowEmpty set true if you want to allow empty text and false if not.
 * @param {!number} length length to be used for validation of the text paramater.
 */

const isValid = (
  type = "email",
  text = "",
  length = 0,
  allowEmpty = false
) => {
  const validText = validateText(text, allowEmpty, length);
  if (!validText) return false;
  else {
    if (type === "email") {
      const validEmail = validateEmail(text);
      if (validEmail) return true;
      else return false;
    } else return false;
  }
};

module.exports = isValid;
