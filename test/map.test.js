// IMPORT MODULES
const assert = require('chai').assert;
const map = require('../map');

// TEST CODE
describe("#map", () => {
  it("returns ['FIZZ', 'BUZZ', 'NO', 'MORE'] for word => word.toUpperCase() of ['fizz', 'buzz', 'no', 'more']", () => {
    assert.deepEqual(map(['fizz', 'buzz', 'no', 'more'], word => word.toUpperCase()), ['FIZZ', 'BUZZ', 'NO', 'MORE']);
  });
});
