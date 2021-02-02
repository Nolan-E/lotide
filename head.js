// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } return output;
};

const head = function(Arr) {
  let output = Arr[0];
  return output;
};

// TEST CODE
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));