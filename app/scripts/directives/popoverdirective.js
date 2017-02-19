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
      template: '<span>{{label}}</span>',
      link: function (scope, el, attrs) {
        scope.label = attrs.popoverLabel;
        $(el).popover({
          trigger: 'click',
          html: true,
          content: attrs.popoverHtml,
          placement: attrs.popoverPlacement
        });
      }
    };
  });
