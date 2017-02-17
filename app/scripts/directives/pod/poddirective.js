'use strict';

/**
 * @ngdoc directive
 * @name vizdashApp.directive:podDirective
 * @description
 * # podDirective
 */
angular.module('vizdashApp')
  .controller('PodController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.addCounter = function() {
      console.log("Counter clicked");
      $scope.count++;
    };

  }])
  .directive('podDirective', function () {
    return {
      template: '<div class="col-md-6"><button ng-click="addCounter()">Counter</button> Count: {{count}}</div>',
      restrict: 'E'
    };
  });
