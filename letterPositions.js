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

const assertArraysEqual = function(actual, expected) {
  let output = "";

  if (eqArrays(actual, expected)) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (!eqArrays(actual, expected)) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};
// FUNCTION IMPLEMENTATION
const letterPositions = function(str) {
  const output = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      null;
    } else if (output[str[i]]) {
      output[str[i]].push(i);
    } else {
      output[str[i]] = [i];
    }
  }
  return output;
};

// TEST 1 CODE
const test1 = letterPositions("hello");
console.log(test1);

assertArraysEqual(test1.h, [0]);
assertArraysEqual(test1.e, [1]);
assertArraysEqual(test1.l, [2, 3]);
assertArraysEqual(test1.o, [4]);

//TEST 2 CODE
const test2 = letterPositions("lighthouse in the house");
console.log(test2);

assertArraysEqual(test2.l, [0]);
assertArraysEqual(test2.i, [1, 11]);
assertArraysEqual(test2.g, [2]);
assertArraysEqual(test2.h, [3, 5, 15, 18]);
assertArraysEqual(test2.t, [4, 14]);
assertArraysEqual(test2.o, [6, 19]);
assertArraysEqual(test2.u, [7, 20]);
assertArraysEqual(test2.s, [8, 21]);
assertArraysEqual(test2.e, [9, 16, 22]);
assertArraysEqual(test2.n, [12]);