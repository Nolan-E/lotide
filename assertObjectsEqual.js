// IMPORT MODULES
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = "";

  if (eqObjects(actual, expected)) {
    output = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else if (!eqObjects(actual, expected)) {
    output = `⛔️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(output);
};

// EXPORT MODULES
module.exports = assertObjectsEqual;