'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:dashboardDirective
 * @description
 * # dashboardDirective
 */
angular.module('vizdashApp')
  .controller('DashboardDirectiveController', ['$scope', '$compile', 'ProcessService', function ($scope, $compile, ProcessService) {
    $scope.data = {};
    $scope.addProcess = function () {
      ProcessService.incrementProcessCount();
      var processFactory = $compile("<div ng-controller='ProcessController'><process-directive></process-directive></div>");
      var processDiv = processFactory($scope);
      var containerDiv = document.getElementById('processContainer');
      angular.element(containerDiv).append(processDiv);
    };

  }])
  .directive('dashboardDirective', function () {
    return {
      templateUrl: '/views/dashboardview.html',
      restrict: 'E'
    };
  });
