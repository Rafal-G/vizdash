'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:ProcessController
 * @description
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', '$timeout', 'ProcessService', function ($scope, $timeout, ProcessService) {
    var pollingIntervalMS = 1000;
    $scope.processCreated = false;

    //"Creating" process via Service call that goes to a Mock Backend
    ProcessService.createProcess().then(function (data) {
      $scope.processCreated = true;
      $scope.processStatus = data.processStatus;
      $scope.cpuUsage = data.cpuUsage;
      $scope.memoryUsage = data.memoryUsage;
      $scope.insances = data.instances;
      $scope.upTime = data.uptime;
      $scope.processCount = ProcessService.getProcessCount();

      $scope.instances = ProcessService.getInstances();
    });

    var ticker = function () {
      $timeout(ticker, pollingIntervalMS);

      if ($scope.processCreated) {
        $scope.upTime++;
        $timeout(updateCPU, pollingIntervalMS);
        $timeout(updateMemory, pollingIntervalMS);
      }
    };
    ticker();

    var updateMemory = function () {
      $scope.memoryUsage = ProcessService.getProcessMemory($scope.memoryUsage)
    };
    var updateCPU = function () {

      $scope.cpuUsage = Math.floor((Math.random() * 100) + 1);
      var time = $scope.cpuData.length + 1;
      // var cpu = Math.round(Math.random() * 100);
      $scope.cpuData.push({time: time, cpu: $scope.cpuUsage});
    };

    $scope.cpuData = [];

    var seedCpuData = function () {
      for (var i = 0; i < 11; i++) {
        $scope.cpuData.push({time: i, cpu: 0})
      }
    };
    seedCpuData();
  }]);

