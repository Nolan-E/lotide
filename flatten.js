// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(actual, expected) {
  let output = "";

  if (eqArrays(actual, expected)) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (!eqArrays(actual, expected)) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};

const flatten = function(source) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (!Array.isArray(source[i])) {
      output.push(source[i]);
    } else {
      for (let j = 0; j < source[i].length; j++) {
        output.push(source[i][j]);
      }
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3,4], [5], 6]), [1, 2, 3, 4, 5, 6]);