// HELPER FUNCTION
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, value) {
  let output;

  for (const genre in obj) {
    let tvShow = obj[genre];
    if (value === tvShow) {
      output = genre;
    }
  }
  return output;
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);