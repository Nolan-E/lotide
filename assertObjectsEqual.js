const { inspect } = require('util');

// HELPER FUNCTIONS
const eqArrays = function(Arr1, Arr2) {

  if (Arr1.length === Arr2.length) {
    for (let i = 0; i < Arr1.length; i++) {
      if (Arr1[i] !== Arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let check of obj1Keys) {
    if (Array.isArray(object1[check]) && Array.isArray(object2[check])) {
      if (!eqArrays(object1[check], object2[check])) {
        return false;
      }
    } else if (object1[check] !== object2[check]) {
      return false;
    }
  }
  return true;
};

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