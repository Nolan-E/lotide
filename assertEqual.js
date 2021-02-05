// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("LHL", "LHL");
assertEqual(1, 1);
assertEqual(1, 10);