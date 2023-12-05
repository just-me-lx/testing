const {add, mul,cover} = require('../src/math');

// if (add(2, 3) == 5) {
//     console.log('add(2, 3) === 5, OK');
// } else {
//     console.log('add(2, 3) !== 5, error');
// }

// const assert = require('assert');
// assert.equal(add(2, 3), 5);

const {should, expect, assert} = require('chai');
should();
add(2, 3).should.equal(5);//BDD
expect(add(2,3)).to.be(5);//BDD
assert.equal(add(2, 3), 5);//TDD
