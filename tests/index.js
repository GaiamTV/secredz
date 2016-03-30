const secredz = require('../index')
const should = require('chai').should()

describe('secredz', function () {
  it('should be a function', function () {
    secredz.should.be.a('function')
  })

  it('should return an error when passed invalid arguments', function (done) {
    secredz('wrong-bucket-name', 'credentials.json', function (err, data) {
      err.should.be.an('error')
      should.not.exist(data)
      done()
    })
  })

  it('should return an object when passed valid arguments', function (done) {
    secredz('gaia-creds-dev-stage', 'credentials.json', function (err, data) {
      should.not.exist(err)
      data.should.be.an('object')
      done()
    })
  })

})
