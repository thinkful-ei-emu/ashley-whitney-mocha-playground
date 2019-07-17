const sort = require('../sort');
const expect = require('chai').expect;

describe('Sort function', () => {

  it('rearranges numbers in ascending order', () => {
    const input = [4,2,7,1,9];
    const result = [1,2,4,7,9];

    expect(sort(input)).to.deep.equal(result);
  });

  it('sorts an array with two numbers', () => {
    const input = [5,3];
    const result = [3,5];

    expect(sort(input)).to.deep.equal(result);
  });

});