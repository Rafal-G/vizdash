'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .directive('podDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the podDirective directive');
      }
    };
  });
