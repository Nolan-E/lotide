// IMPORT MODULES
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let output = "";

  if (eqArrays(actual, expected)) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (!eqArrays(actual, expected)) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};

// EXPORT MODULES
module.exports = assertArraysEqual;