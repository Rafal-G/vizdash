'use strict';

/**
 * @ngdoc service
 * @name vizdashApp.processService
 * @description
 * # processService
 * Service in the vizdashApp.
 */
angular.module('vizdashApp')
  .service('ProcessService', function () {
    var processCount = 0;

    var subtract = function (x, y) {
      return x - y;
    };

    var add = function (x, y) {
      return x + y;
    };

    var modifyAmount = function (amount, operatorFunction) {
      return operatorFunction(amount, Math.floor((Math.random() * 10) + 1));
    };

    return {
      getProcessMemory: function (amount) {
        if (amount >= 50) {
          return modifyAmount(amount, subtract);
        } else {
          return modifyAmount(amount, add);
        }
      },
      getProcessCount: function () {
        return processCount;
      },

      incrementProcessCount: function () {
        processCount++;
      }
    }
  });
