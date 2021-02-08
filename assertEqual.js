// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

// EXPORT MODULES
module.exports = assertEqual;
