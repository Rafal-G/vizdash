'use strict';

/**
 * @ngdoc service
 * @name vizdashApp.podService
 * @description
 * # podService
 * Service in the vizdashApp.
 */
angular.module('vizdashApp')
  .service('PodService', function () {
    var processCount = 0;

    return {
      getProcessCount: function () {
        return processCount;
      },

      incrementProcessCount: function () {
        processCount++;
      },

      decrementProcessCount: function() {
        processCount--;
      }
    }
  });
