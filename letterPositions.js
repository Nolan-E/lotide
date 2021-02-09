// FUNCTION IMPLEMENTATION
const letterPositions = function(str) {
  const output = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      null;
    } else if (output[str[i]]) {
      output[str[i]].push(i);
    } else {
      output[str[i]] = [i];
    }
  }
  return output;
};

// EXPORT MODULES
module.exports = letterPositions;
