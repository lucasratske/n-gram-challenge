const request = require('supertest');
const app = require('../../src/app');

describe('NGram', () => {
  it('should call api /ngram and return status code 200', (done) => {
    request(app).get('/ngram?phrase=Show me the code.').expect(200, done);
  });
  it('should call api /ngram and return status code 500', (done) => {
    request(app).get('/ngram').expect(500, done);
  });
});
