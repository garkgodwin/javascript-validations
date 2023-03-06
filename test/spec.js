const isValid = require("../src/index");
const assert = require("assert");

//TODO: ADD MORE TESTS HERE
assert.strictEqual(
  isValid("email", "test@test.com", 20, false),
  true
);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);
