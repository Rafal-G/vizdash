'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:DashboardController
 * @description
 * # MainCtrl
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('DashboardController', ['$scope', '$compile', 'ProcessService', function ($scope, $compile, ProcessService) {
    $scope.data = {};
    $scope.addProcess = function () {
      ProcessService.incrementProcessCount();
      var processFactory = $compile("<div ng-controller='ProcessController'><process-directive></process-directive></div>");
      var processDiv = processFactory($scope);
      var containerDiv = document.getElementById('processContainer');
      angular.element(containerDiv).append(processDiv);
    };

  }])
