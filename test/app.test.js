const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('app /frequency endpoint', () => {
  it('no string, expect a 400 status message', () => {
    return request(app) 
      .get('/frequency')
      .expect(400);
  });

 

});

describe('app /frequency/?s=foo endpoint', () => {
  it('count should represent frequency of each character in string', () => {
    return request(app) 
      .get('/frequency?s=aaaaBB')
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.unique).to.equal(2);
        expect(res.body.average).to.equal(3);
        expect(res.body.highest).to.equal('a');
        expect(res.body['a']).to.equal(4);
        expect(res.body['b']).to.equal(2);
      });
  });

 

});
