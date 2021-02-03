// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } return output;
};

const eqArrays = function(Arr1, Arr2) {
  let output = true;
  if (Arr1.length === Arr2.length){
    for (let i = 0; i < Arr1.length; i++) {
      if (Arr1[i] === Arr2[i]) {
        output = true;
      } else {
        output = false;
      }
    }
  } else {
    output = false;
  }
  return output;
};

// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));