// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } return output;
};


// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("LHL", "LHL"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 10));