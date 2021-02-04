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
const map = function(array, callback) {
  const output = [];
  for (const item of array) {
    output.push(callback(item));
  }
  return output;
};

// TEST CASE 1
const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// TEST CASE 2
const words2 = ["fizz", "buzz", "no", "more"];
const results2 = map(words2, word => word.toUpperCase());
assertArraysEqual(results2, ["FIZZ", "BUZZ", "NO", "MORE"]);

// TEST CASE 3
const words3 = ["goo", "sou", "poo", "loo"];
const results3 = map(words3, word => word + 'p');
assertArraysEqual(results3, ["goop", "soup", "poop", "loop"]);