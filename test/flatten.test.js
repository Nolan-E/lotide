// IMPORT MODULES
const assert = require('chai').assert;
const flatten = require('../flatten');

// TEST CODE
describe("#flatten", () => {
  it("returns [1, 2, 3] for [1, 2, [3]]", () => {
    assert.deepEqual(flatten([1, 2, [3]]), [1, 2, 3]);
  });
  it("returns [1] for [[1]]", () => {
    assert.deepEqual(flatten([[1]]), [1]);
  });
});