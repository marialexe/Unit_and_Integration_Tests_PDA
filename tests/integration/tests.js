var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  it('should have working button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  //due to the design of the calculator can't do tests for decimal numbers (as INPUTS) as there is no "." button. This test can't be reproduced in manual testing for this calculator.
  //due to the design of the calculator can't do tests with negative numbers (as INPUTS) as there is no functionality to add "-" in front of numbers. This test can't be reproduced in manual testing for this calculator.

  it('should have the correct url test1', function(){
    expect(browser.getCurrentUrl()).to.eventually.contain('3000');
  })

  it('should have the correct url test2', function(){
    expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:3000/');
  })


  it('should have working number 1 button test', function(){
    running_total = element(by.css('#running_total'))
    //element() is a method using a locator
    element(by.css('#number1')).click();
    //expect is a validation statement
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('should have working number 2 button test', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number 3 button test', function(){
    running_total = element(by.css('#running_total'))
    element(by.partialButtonText('3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should update the running total when clicking buttons test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('4')).click();
    element(by.buttonText('5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('45');
    element(by.buttonText('6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('456')
  })

  it('should update the running total when clicking buttons test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('78');
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7890')
  })

  it('should correctly update the running total when clicking the add operator test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('6')).click();
    element(by.buttonText('+')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  })

  it('should correctly update the running total when clicking the add operator test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('85');
  })

  it('should correctly update the running total when clicking the subtract operator test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('9')).click();
    element(by.buttonText('-')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  })

  it('should correctly update the running total when clicking the subtract operator test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should correctly update the running total when clicking the multiply operator test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('6')).click();
    element(by.buttonText('*')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24');
  })

  it('should correctly update the running total when clicking the multiply operator test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number8')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2400');
  })

  it('should correctly update the running total when clicking the divide operator test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('9')).click();
    element(by.buttonText('/')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('should correctly update the running total when clicking the divide operator test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('26');
  })

  it('should correctly update the running total when chaining multiple operations together test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('9')).click();
    element(by.buttonText('/')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('*')).click();
    element(by.buttonText('2')).click();
    element(by.buttonText('-')).click();
    element(by.buttonText('5')).click();
    element(by.buttonText('+')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })

  it('should correctly update the running total when chaining multiple operations together test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should correctly update the running total when using decimal numbers test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('3')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('/')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('*')).click();
    element(by.buttonText('5')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('46.25');
  })

  it('should correctly update the running total when using decimal numbers test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('63.75');
  })

  it('should correctly update the running total when using negative numbers test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('2')).click();
    element(by.buttonText('-')).click();
    element(by.buttonText('8')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('+')).click();
    element(by.buttonText('1')).click();
    element(by.buttonText('2')).click();
    element(by.buttonText('*')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('/')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-30');
  })

  it('should correctly update the running total when using negative numbers test2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-0.5');
  })

  it('should correctly update the running total when using very large numbers test', function(){
    running_total = element(by.css('#running_total'))
    element(by.buttonText('9')).click();
    element(by.buttonText('8')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('6')).click();
    element(by.buttonText('5')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('2')).click();
    element(by.buttonText('1')).click();
    element(by.buttonText('0')).click();
    element(by.buttonText('*')).click();
    element(by.buttonText('9')).click();
    element(by.buttonText('8')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('6')).click();
    element(by.buttonText('5')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('2')).click();
    element(by.buttonText('1')).click();
    element(by.buttonText('0')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('97546105778997100000');
    element(by.buttonText('+')).click();
    element(by.buttonText('1')).click();
    element(by.buttonText('2')).click();
    element(by.buttonText('3')).click();
    element(by.buttonText('4')).click();
    element(by.buttonText('5')).click();
    element(by.buttonText('6')).click();
    element(by.buttonText('7')).click();
    element(by.buttonText('8')).click();
    element(by.buttonText('9')).click();
    element(by.buttonText('0')).click();
    element(by.buttonText('=')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('97546105780231670000');
  })

  it('should output Error when divide by 0 test1', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Error! Division by 0 is NOT a valid operation');
  })

});