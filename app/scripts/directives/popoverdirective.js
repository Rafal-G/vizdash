'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:popoverDirective
 * @description
 * # popoverDirective
 */
angular.module('vizdashApp')
  .directive('popoverDirective', function () {
    return {
      restrict: 'A',
      template: '',
      link: function (scope, el, attrs) {
        $(el).popover({
          trigger: 'click',
          html: true,
          content: attrs.popoverHtml,
          placement: attrs.popoverPlacement
        });
      }
    };
  });
