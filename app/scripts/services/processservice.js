'use strict';

/**
 * @ngdoc service
 * @name vizdashApp.processService
 * @description
 * # processService
 * Service in the vizdashApp.
 */
angular.module('vizdashApp')
  .service('ProcessService',['$http', function ($http) {
    var processCount = 0;

    var subtract = function (x, y) {
      return x - y;
    };

    var add = function (x, y) {
      return x + y;
    };

    var modifyAmount = function (amount, operatorFunction) {
      return operatorFunction(amount, randomInt(10));
    };


    var randomInt = function(max) {
      return Math.floor((Math.random() * max) + 1);
    };

    var modifyAmount = function (amount, operatorFunction) {
      return operatorFunction(amount, randomInt(10));
    };

    return {
      //Create the process and return a promise.
      createProcess: function() {
        var promise = $http.get('/v1/process/create').then(function(response) {
          return response.data;
        });
        return promise;
      },

      //Return the process CPU via promise
      getProcessCpu: function() {
        var promise = $http.get('/v1/process/cpu').then(function(response) {
          return response.data;
        });
        return promise;
      },

      //Work out process memory by passing through a function of subtract or add that is defined above
      getProcessMemory: function (amount) {
        if (amount >= 50) {
          return modifyAmount(amount, subtract);
        } else {
          return modifyAmount(amount, add);
        }
      },

      getInstances: function() {
        return randomInt(10);
      },

      getProcessId: function () {
        return processCount;
      },
      incrementProcessId: function () {
        processCount++;
      }
    }
  }]);
