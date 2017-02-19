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

    //"Creating" process via a service call that goes to the Mock Backend
    ProcessService.createProcess().then(function (data) {
      $scope.processCreated = true;
      $scope.processStatus = data.processStatus;
      $scope.cpuUsage = data.cpuUsage;
      $scope.memoryUsage = data.memoryUsage;
      $scope.insances = data.instances;
      $scope.upTime = data.uptime;
      $scope.processId = ProcessService.getProcessId();
      $scope.processRestarts = data.restarts;

      //Simulate restarts on 2nd process
      if($scope.processId == 1) {
        $scope.processRestarts = 3;
      }

      //Only display restart data if restarts are more than 0
      $scope.restartData = "";
      if ($scope.processRestarts > 0) {
        for (var i = 0; i < data.restartStats.date.length; i++) {
          $scope.restartData = "<p style='white-space:nowrap;'>" + $scope.restartData + data.restartStats.date[i] + "</p>";
        }
      }

      $scope.instances = ProcessService.getInstances();
    });

    //CPU Seed data needed for the CPU chart
    $scope.cpuData = [];

    var seedCpuData = function () {
      for (var i = 0; i < 11; i++) {
        $scope.cpuData.push({time: i, cpu: 0})
      }
    };
    seedCpuData();

    //Ticker method that is used to fetch the latest process statistics
    var ticker = function () {
      if ($scope.processCreated) {
        $scope.upTime++;
        updateCPU();
        updateMemory();
      }
      $timeout(ticker, pollingIntervalMS);
    };
    ticker();

    //Update process memory
    var updateMemory = function () {
      $scope.memoryUsage = ProcessService.getProcessMemory($scope.processId, $scope.memoryUsage)
    };

    //Update process CPU usage
    var updateCPU = function () {
      $scope.cpuUsage = ProcessService.getProcessCpu().then(function (data) {
        $scope.cpuUsage = data;
        var time = $scope.cpuData.length + 1;
        $scope.cpuData.push({time: time, cpu: $scope.cpuUsage});
      });
    };

  }]);

