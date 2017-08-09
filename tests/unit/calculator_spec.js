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

  // testing calculator.numberClick() function 
  it('can click a one digit number test', function(){
    calculator.numberClick(7);
    assert.strictEqual(7,calculator.runningTotal);
  });

  // testing calculator.numberClick() function 
  it('can click a two digit number test', function(){
    calculator.numberClick(7);
    calculator.numberClick(4);
    assert.strictEqual(74,calculator.runningTotal);
  });

  // testing calculator.numberClick() function 
  it('can click a three digit number test', function(){
    calculator.numberClick(7);
    calculator.numberClick(0);
    calculator.numberClick(5);
    assert.strictEqual(705,calculator.runningTotal);
  });

  // testing calculator.add() function 
  it('can add two one digit numbers test', function(){
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.add(4);
    assert.strictEqual(11,calculator.runningTotal);
  });

  // testing calculator.add() function 
  it('can add two two digits numbers test', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.add(75);
    assert.strictEqual(100,calculator.runningTotal);
  });

  // testing calculator.add() function 
  it('can add two three digits numbers test', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.add(444);
    assert.strictEqual(999,calculator.runningTotal);
  });

});
