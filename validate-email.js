/**
 * This function will return a boolean of true or false.
 * @param {!string} email email to be validated.
 */
module.exports = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
