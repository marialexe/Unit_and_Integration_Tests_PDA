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

});