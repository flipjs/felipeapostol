var expect = require('chai').expect
var id = require('../src/index')

describe('Felipe Apostol', function () {
  it('should return Felipe as his first name', function () {
    expect(id.firstName()).to.equal('Felipe')
  })
  it('should return Apostol as his last name', function () {
    expect(id.lastName()).to.equal('Apostol')
  })
  it('should return Felipe Apostol as his full name', function () {
    expect(id.fullName()).to.equal('Felipe Apostol')
  })
  it('should return 15 October as his birth date', function () {
    expect(id.birthDate()).to.equal('15 October')
  })
  it('should return Software Developer as his job', function () {
    expect(id.job()).to.equal('Software Developer')
  })
  it('should return UK as his location', function () {
    expect(id.location()).to.equal('UK')
  })
  it('should return an array of interests', function () {
    expect(id.interests()).to.satisfy(isArrayOfStrings)
    function isArrayOfStrings (array) {
      return array.every(function (item) {
        return typeof item === 'string'
      })
    }
  })
  it('should return javascript as one of his interests', function () {
    expect(id.interests()).to.contain('javascript')
  })
  it('should return a valid JSON string', function () {
    expect(id.json()).to.satisfy(JSON.parse)
  })
})

