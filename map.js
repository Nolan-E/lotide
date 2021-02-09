// FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const output = [];
  for (const item of array) {
    output.push(callback(item));
  }
  return output;
};

// EXPORT MODULES
module.exports = map;
