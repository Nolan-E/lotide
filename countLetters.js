// FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  const output = {};
  const strArray = str.split(" ").join("");

  for (const letter of strArray) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }

  return output;
};

module.exports = countLetters;