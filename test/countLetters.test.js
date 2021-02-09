// IMPORT MODULES
const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe("#countLetters", () => {
  it("returns {h: 1, e: 1, l: 2, o: 1} for 'hello'", () => {
    assert.deepEqual(countLetters('hello'), {h: 1, e: 1, l: 2, o: 1});
  });
});