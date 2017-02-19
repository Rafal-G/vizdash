'use strict';

describe('Directive: popoverDirective', function () {

  // load the directive's module
  beforeEach(module('vizdashApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<popover-directive></popover-directive>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the popoverDirective directive');
  // }));
});
