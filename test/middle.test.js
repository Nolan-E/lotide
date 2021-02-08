// IMPORT MODULES
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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