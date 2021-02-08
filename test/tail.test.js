// IMPORT MODULES
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
// TESTING TO MAKE SURE ORIGINAL ARRAY IS NOT MUTATED
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
// TEST CASE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[1], "Labs");
assertEqual(result[0], "Lighthouse");