'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:dashboardDirective
 * @description
 * # dashboardDirective
 */
angular.module('vizdashApp')
  .controller('DashboardDirectiveController', ['$scope', '$compile', function ($scope, $compile) {
    $scope.data = {};
    $scope.addProcess = function () {
      console.log("Adding pod");


      var podFactory = $compile("<div ng-controller='PodController'><pod-directive></pod-directive></div>");
      var podDiv = podFactory($scope);
      var containerDiv = document.getElementById('podContainer');
      angular.element(containerDiv).append(podDiv);

    };

  }])
  .directive('dashboardDirective', function () {
    return {
      templateUrl: '/views/dashboardview.html',
      restrict: 'E'
    };
  });