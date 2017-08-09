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

  // testing calculator.add() function 
  it('can add multiple numbers test', function(){
    calculator.add(50);
    calculator.operatorClick('=');
    calculator.add(30);
    calculator.operatorClick('=');
    calculator.add(10);
    calculator.operatorClick('=');
    assert.strictEqual(90,calculator.runningTotal);
  });

  // testing calculator.add() function 
  it('can add multiple positive numbers test', function(){ 
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(375,calculator.runningTotal); 
  });

  // testing calculator.subtract() function 
  it('can subtract two one digit numbers test', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    assert.strictEqual(3,calculator.runningTotal);
  });

  // testing calculator.subtract() function 
  it('can subtract two two digit numbers test', function(){
    calculator.numberClick(7);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.subtract(25);
    assert.strictEqual(45,calculator.runningTotal);
  });

  // testing calculator.subtract() function 
  it('can subtract two three digit numbers test', function(){
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.subtract(222);
    assert.strictEqual(777,calculator.runningTotal);
  });

  // testing calculator.subtract() function 
  it('can subtract a higher number from a smaller number test', function(){
    calculator.numberClick(3);
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.subtract(55);
    assert.strictEqual(-20,calculator.runningTotal);
  });

  // testing calculator.operatorClick() function 
  it('can subtract multiple positive numbers test', function(){ 
    calculator.numberClick(1);
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(7,calculator.runningTotal); 
  });

  // testing calculator.subtract() function 
  it('can subtract multiple positive numbers test2', function(){ 
    calculator.subtract(25);
    calculator.operatorClick('=');
    calculator.subtract(5);
    calculator.operatorClick('=');
    calculator.subtract(15);
    calculator.operatorClick('=');
    assert.strictEqual(-45,calculator.runningTotal); 
  });

  // testing calculator.operatorClick() function 
  it('can subtract and add multiple positive numbers test', function(){ 
    calculator.numberClick(4);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(20,calculator.runningTotal); 
  });

  // testing calculator.subtract() function 
  it('can subtract and add multiple positive numbers test2', function(){ 
    calculator.subtract(125);
    calculator.operatorClick('=');
    calculator.add(5);
    calculator.operatorClick('=');
    assert.strictEqual(-120,calculator.runningTotal); 
  });

  // testing calculator.multiply() function 
  it('can multiply two one digit numbers test', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    assert.strictEqual(15,calculator.runningTotal);
  });

  // testing calculator.multiply() function 
  it('can multiply two two digits numbers test', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('*');
    calculator.multiply(20);
    assert.strictEqual(200,calculator.runningTotal);
  });

  // testing calculator.multiply() function 
  it('can multiply two three digits numbers test', function(){
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('*');
    calculator.multiply(100);
    assert.strictEqual(50000,calculator.runningTotal);
  });

  // testing calculator.divide() function 
  it('can divide two one digit numbers test', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.divide(7);
    assert.strictEqual(3,calculator.runningTotal);
  });

  // testing calculator.divide() function 
  it('can divide two one digit numbers test2', function(){
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.divide(7);
    assert.strictEqual(0,calculator.runningTotal);
  });

  // testing calculator.divide() function 
  it('can divide two one digit numbers test3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('/');
    calculator.divide(0);
    assert.equal('Error! Division by 0 is NOT a valid operation',calculator.runningTotal);
  });

  // testing calculator.divide() function 
  it('can divide two two digits numbers test', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.divide(40);
    assert.strictEqual(0.5,calculator.runningTotal);
  });

  // testing calculator.divide() function 
  it('can divide two three digits numbers test', function(){
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.divide(100);
    assert.strictEqual(5,calculator.runningTotal);
  });

});
