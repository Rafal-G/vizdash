'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:ProcessController
 * @description
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', '$timeout', '$http', 'ProcessService', function ($scope, $timeout, $http, ProcessService) {
    $scope.count = 0;
    $scope.processStatus = "On";
    $scope.cpuUsage = 0;
    $scope.memoryUsage = 0;
    $scope.fadedIn = true;
    $scope.instances = Math.floor((Math.random() * 10) + 1);
    $scope.processCount = ProcessService.getProcessCount();

    $scope.upTime = 0;
    var ticker = function () {
      $scope.upTime++;
      $timeout(updateCPU, 1000);
      $timeout(updateMemory, 1500);
      $timeout(ticker, 1000);
    };
    ticker();

    // $http.get('/phones').then(function(response) {
    //   console.log(response.data);
    // });

    var updateMemory = function () {
      $scope.memoryUsage = ProcessService.getProcessMemory($scope.memoryUsage)
    };
    var updateCPU = function () {

      $scope.cpuUsage = Math.floor((Math.random() * 100) + 1);
      var time = $scope.cpuData.length + 1;
      // var cpu = Math.round(Math.random() * 100);
      $scope.cpuData.push({time: time, cpu: $scope.cpuUsage});
    };

    $scope.cpuData = [
    ];

    var seedCpuData = function() {
      for(var i = 0; i < 11; i++) {
        $scope.cpuData.push({time: i, cpu: 0})
      }
    };
    seedCpuData();
  }]);

