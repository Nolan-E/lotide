const without = function(source, itemsToRemove) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};

// EXPORT MODULES
module.exports = without;
