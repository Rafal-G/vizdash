'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', 'ProcessService', function($scope, ProcessService) {
    $scope.count = 0;
    $scope.addCounter = function() {
      console.log("Counter clicked");
      $scope.count++;
    };
    $scope.processCount = ProcessService.getProcessCount();
  }])
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
