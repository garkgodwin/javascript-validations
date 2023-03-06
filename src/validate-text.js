/**
 * This function will return a boolean of true or false.
 * @param {!string} text any text you want.
 * @param {!boolean} allowEmpty set true if you want to allow empty text and false if not.
 * @param {!number} length length to be used for validation of the text paramater.
 */
const validateText = (text, allowEmpty = true, length = 0) => {
  if (text === null || text === undefined) {
    return true;
  }
  if (allowEmpty && length === 0) {
    return true;
  } else if (!allowEmpty) {
    return text.length === 0
      ? false
      : text.length <= length
      ? true
      : false;
  } else if (length > 0) {
    console.log("Got here");
    return text.length <= length ? true : false;
  } else {
    console.log("Unhandled condition");
  }
  return false;
};

module.exports = validateText;
