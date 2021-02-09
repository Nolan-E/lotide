// IMPORT MODULES
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let check of obj1Keys) {
    if (Array.isArray(object1[check]) && Array.isArray(object2[check])) {
      if (!eqArrays(object1[check], object2[check])) {
        return false;
      }
    } else if (object1[check] !== object2[check]) {
      return false;
    }
  }
  return true;
};

// EXPORT MODULES
module.exports = eqObjects;
