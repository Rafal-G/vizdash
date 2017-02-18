'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .directive('processDirective', function () {
    return {
      templateUrl: 'views/processview.html',
      restrict: 'E',
      link: function(scope, element, attrs) {

        scope.removeDirective = function() {
          scope.$destroy();
          element.remove();
        };
      }
    };
  });
