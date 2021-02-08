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

// EXPORT MODULES
module.exports = middle;
