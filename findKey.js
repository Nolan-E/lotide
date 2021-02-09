// FUNCTION IMPLEMENTATION
const findKey = (object, callback) => {
  let output;

  for (const key in object) {
    let value = object[key];

    if (callback(value)) {
      return key;
    }
  }
  return output;
};

// EXPORT MODULES
module.exports = findKey;
