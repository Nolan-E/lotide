// IMPORT MODULES
const assert = require('chai').assert;
const without = require('../without');

// TEST CODE
describe("#without", () => {
  it("returns ['1', '2'] for ['1', '2', '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
});
