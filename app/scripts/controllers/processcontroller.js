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
    $scope.processStatus= "On";
    $scope.cpuUsage = 0;
    $scope.memoryUsage = 0;
    $scope.fadedIn = true;
    $scope.instances = Math.floor((Math.random() * 10) + 1);

    $scope.processCount = ProcessService.getProcessCount();

    $scope.upTime = 0;
    var ticker = function() {
      $scope.upTime++;
      $timeout(updateCPU, 1000);
      $timeout(updateMemory, 1500);
      $timeout(ticker, 1000);
    };
    ticker();

    var updateMemory = function() {
      $scope.memoryUsage = ProcessService.getProcessMemory($scope.memoryUsage)
    };
    var updateCPU = function() {
      $scope.cpuUsage = Math.floor((Math.random() * 100) + 1);
    }


  }]);
