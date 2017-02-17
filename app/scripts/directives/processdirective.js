'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', 'PodService', function($scope, PodService) {
    $scope.count = 0;
    $scope.addCounter = function() {
      console.log("Counter clicked");
      $scope.count++;
    };

    $scope.processCount = PodService.getProcessCount();


  }])
  .directive('processDirective', ['PodService', function (PodService) {
    return {
      templateUrl: 'views/processview.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.removeDirective = function() {
          PodService.decrementProcessCount();
          scope.$destroy();
          element.remove();
        };
      }
    };
  }]);
