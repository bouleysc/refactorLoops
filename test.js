var app = require('./app');
var expect = require('chai').expect;

describe('Refactor Loops', function() {
  describe('#ToSentence', function() {
    it('should return a string of names without an oxford comma and with an "and" before the last name', function() {
      expect(app.toSentence(["Sue", "Will", "Rachel"])).to.equal("Sue, Will and Rachel");
      expect(app.toSentence(["Sue", "Will"])).to.equal("Sue and Will");
    });
  });
  describe('#ArrayOfNumbers', function() {
    it('should create array of numbers the length of the number that is given', function() {
      expect(app.arrayOfNumbers(3)[2] === 3);
    });
  });
  describe('#Acronym', function() {
    it('should return a string of the first letter of each word in the array', function() {
      expect(app.acronym(["Java", "Script", "Object", "Notation"])).to.equal("JSON");
      expect(app.acronym(["Sue", "Will"])).to.equal("SW");
    });
  });
  describe('#Replace', function() {
    it('should return an array with the set of replaced numbers that are specified', function() {
      expect(app.replace([1, 3, 2, 1, 3], 1, 4)[0] === 4);
    });
  });
});
