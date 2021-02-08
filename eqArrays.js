// FUNCTION IMPLEMENTATION
const eqArrays = function(Arr1, Arr2) {

  if (Arr1.length === Arr2.length) {
    for (let i = 0; i < Arr1.length; i++) {
      if (Arr1[i] !== Arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

// EXPORT MODULES
module.exports = eqArrays;
