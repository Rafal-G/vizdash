'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:dashboardDirective
 * @description
 * # dashboardDirective
 */
angular.module('vizdashApp')
  .directive('dashboardDirective', function () {
    return {
      templateUrl: '/views/dashboardview.html',
      restrict: 'E'
    };
  });
