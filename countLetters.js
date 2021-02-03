// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

// FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  const output = {};
  const strArray = str.split(" ").join("");
  // console.log(strArray);

  for (const letter of strArray) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  // console.log(output);
  return output;
};

// TEST CODE
const test1 = countLetters("lighthouse in the house");
console.log(test1);

assertEqual(test1["l"], 1);
assertEqual(test1["i"], 2);
assertEqual(test1["g"], 1);
assertEqual(test1["h"], 4);
assertEqual(test1["t"], 2);
assertEqual(test1["o"], 2);
assertEqual(test1["u"], 2);
assertEqual(test1["s"], 2);
assertEqual(test1["e"], 3);
assertEqual(test1["n"], 1);