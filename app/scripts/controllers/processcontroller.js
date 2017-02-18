'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:ProcessController
 * @description
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', '$timeout', 'ProcessService',function($scope, $timeout, ProcessService) {
    $scope.count = 0;
    $scope.cpuUsage = 0;
    $scope.fadedIn = true;
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


  }]);
