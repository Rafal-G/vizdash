'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:fader
 * @description
 * # fader
 */
angular.module('vizdashApp')
  .directive('faderDirective', function () {
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        var duration = attrs.fadeDuration || 200;
        console.log(duration);
        $scope.$watch(attrs.fadeShown, function(value) {
          if (value)
            $(element).fadeIn(duration);
          else
            $(element).fadeOut(duration);
        });
      }
    };
  });
