'use strict';

/**
 * @ngdoc function
 * @name vizdashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vizdashApp
 */
angular.module('vizdashApp')
  .controller('MainCtrl', function ($scope) {

    $scope.clickMe = function() {
      console.log("CLICKED")
    }
  });
