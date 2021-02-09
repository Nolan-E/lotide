// FUNCTION IMPLEMENTATION
const flatten = function(source) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (!Array.isArray(source[i])) {
      output.push(source[i]);
    } else {
      for (let j = 0; j < source[i].length; j++) {
        output.push(source[i][j]);
      }
    }
  }
  return output;
};

// EXPORT MODULES
module.exports = flatten;
