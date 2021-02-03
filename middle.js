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
const middle = function(array) {
  const lastIndex = (array.length - 1);
  const midIndex = (lastIndex / 2);
  const output = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output.push(array[Math.floor(midIndex)]); // push lower mid number
      output.push(array[Math.ceil(midIndex)]); // push upper mid number
    } else {
      output.push(array[midIndex]); // push single mid number
    }
  }
  return output;
};

// TEST CODE
// ARRAYS WITH 1 OR 2 ELEMENTS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
// ARRAYS WITH ODD NUMBER OF ELEMENTS
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// ARRAYS WITH EVEN NUMBER OF ELEMENTS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]