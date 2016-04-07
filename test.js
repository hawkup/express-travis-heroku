var request = require('supertest');
var app = require('./index').app;

describe('GET index', function () {
  it('response ok', function (done) {
    request(app)
      .get('/')
      .expect(200, done)
  })
})
