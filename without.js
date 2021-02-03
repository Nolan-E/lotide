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

const without = function(source, itemsToRemove) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};

// TEST CASE 1
const test1 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(test1, ["1", "2"]);
console.log("-----");
// TEST CASE 2
const test2 = without([1, 4, 6, 2, 4], [4, 2]);
assertArraysEqual(test2, [1, 6]);
console.log("-----");
// TEST CASE 3
const test3 = without(["test", 4, "strings", true], []);
assertArraysEqual(test3, ["test", 4, "strings", true]);
console.log("-----");
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);