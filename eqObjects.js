// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    output = `⛔️ Assertion Failed: ${actual} !== ${expected}`;
  } console.log(output);
};

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

// TEST CODE
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const firstHand = { ace: "spade", four: "heart"};
const secondHand = { four: "heart", ace: "spade" };
assertEqual(eqObjects(firstHand, secondHand), true);

const thirdHand = { ace: "spade", four: "heart", king: "club" };
assertEqual(eqObjects(firstHand, thirdHand), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);