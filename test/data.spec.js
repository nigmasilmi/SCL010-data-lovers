global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');
require('./data.spec.js');

describe('data', () => {

  it('debería ser una objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data.loadData', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.loadData, 'function');
    });
  });

  describe('data.percent', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.percent, 'function');
    });
  });

});
