// IMPORT MODULES
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

// TEST CODE
describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for x => x < 0 of [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
});
