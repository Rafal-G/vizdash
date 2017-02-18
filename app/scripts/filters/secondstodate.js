'use strict';

/**
 * @ngdoc filter
 * @name vizdashApp.filter:secondsToDate
 * @function
 * @description
 * # secondsToDate
 * Filter in the vizdashApp.
 */
angular.module('vizdashApp')
  .filter('secondsToDate', function () {
    return function (seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  });
