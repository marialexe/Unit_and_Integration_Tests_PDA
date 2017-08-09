var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  //due to the design of the calculator can't do tests for decimal numbers as there is no "." button. This test can't be reproduced in manual testing for this calculator.
  //due to the design of the calculator can't do tests with negative numbers (as inputs) as there is no functionality to add "-" in front of numbers. This test can't be reproduced in manual testing for this calculator.
  

});
