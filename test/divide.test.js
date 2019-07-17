const divide = require('../index');
const expect = require('chai').expect;
const request = require('supertest');

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    // spec code here
    const a = 8;
    const b = 4;
    const expected = 2;
    const c = divide(a, b);

    expect(c).to.equal(expected);
    //expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divided by zero', () => {
    const a = 8;
    const b = 0;
    const fn = () => {divide(a, b);};

    expect(fn).to.throw();
    //expect(() => {divide(8, 0)}).to.throw();
  });

});