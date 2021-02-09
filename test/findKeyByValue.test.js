// IMPORT MODULES
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
describe("#findKeyByValue", () => {
  it("returns a 'drama' for 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
});