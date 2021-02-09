// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  const output = [];

  for (const elem of array) {
    if (!callback(elem)) {
      output.push(elem);
    } else {
      break;
    }
  }

  return output;
};

// EXPORT MODULES
module.exports = takeUntil;
