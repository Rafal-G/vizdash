'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:ProcessController
 * @description
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('ProcessController', ['$scope', '$timeout', '$interval', 'ProcessService', function ($scope, $timeout, $interval, ProcessService) {
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

    var updateMemory = function () {
      $scope.memoryUsage = ProcessService.getProcessMemory($scope.memoryUsage)
    };
    var updateCPU = function () {
      $scope.cpuUsage = Math.floor((Math.random() * 100) + 1);
    };

    $scope.salesData = [
      {hour: 1, sales: 54},
      {hour: 2, sales: 66},
      {hour: 3, sales: 77},
      {hour: 4, sales: 70},
      {hour: 5, sales: 60},
      {hour: 6, sales: 63},
      {hour: 7, sales: 55},
      {hour: 8, sales: 47},
      {hour: 9, sales: 55},
      {hour: 10, sales: 30}
    ];

    $interval(function () {
      var hour = $scope.salesData.length + 1;
      var sales = Math.round(Math.random() * 100);
      $scope.salesData.push({hour: hour, sales: sales});

    }, 1000, 1000);
  }]);

