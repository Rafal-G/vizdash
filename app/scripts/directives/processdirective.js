'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', '$timeout', 'ProcessService',function($scope, $timeout, ProcessService) {
    $scope.count = 0;
    $scope.cpuUsage = 0;
    $scope.addCounter = function() {
      console.log("Counter clicked");
      $scope.count++;
    };
    $scope.processCount = ProcessService.getProcessCount();

    $scope.upTime = 0;
    var updateTimer = function() {
      $scope.upTime++;
      $timeout(updateCPU, 1000);
      $timeout(updateTimer, 1000);
    };
    updateTimer();
    var updateCPU = function() {
      $scope.cpuUsage = Math.floor((Math.random() * 100) + 1);
    }
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
