'use strict';

/**
 * @ngdoc service
 * @name vizdashApp.processService
 * @description
 * # podService
 * Service in the vizdashApp.
 */
angular.module('vizdashApp')
  .service('ProcessService', function () {
    var processCount = 0;

    return {
      getProcessCount: function () {
        return processCount;
      },

      incrementProcessCount: function () {
        processCount++;
      }
    }
  });
