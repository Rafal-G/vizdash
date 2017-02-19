'use strict';

describe('Filter: secondsToDate', function () {

  // load the filter's module
  beforeEach(module('vizdashApp'));

  // initialize a new instance of the filter before each test
  var secondsToDate;
  beforeEach(inject(function ($filter) {
    secondsToDate = $filter('secondsToDate');
  }));

  it('should return the input prefixed with "secondsToDate filter:"', function () {
    var text = '440633471000';
    expect(secondsToDate(text)).toBe(440633424200000);
  });

});
