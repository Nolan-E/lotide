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

// EXPORT MODULES
module.exports = findKeyByValue;