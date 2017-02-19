angular.module('vizdashApp').run(function ($httpBackend) {
  var initService = {
    'processStatus': 'On',
    'cpuUsage': 0,
    'memoryUsage': 0,
    'uptime': 0,
    'instances': 0
  };

  var randomInt = function(max) {
    return Math.floor((Math.random() * max) + 1);
  };

  $httpBackend.whenGET('/v1/process/create').respond(initService);
  //This should actually be /v1/process/:processId/cpu however currently I can't get the Regex matching here.
  //And ngMocke2e doesn't work well with path parameters.
  $httpBackend.whenGET('/v1/process/cpu').respond(function(method, url, data) {
    return [200, randomInt(100), {}];
  });
  //This should actually be /v1/process/:processId/memory however currently I can't get the Regex matching here.
  //And ngMocke2e doesn't work well with path parameters.
  $httpBackend.whenGET('/v1/process/memory').respond(function(method, url, data) {
    return [200, randomInt(100), {}];
  });

  // allow views directory to go to real $http
  $httpBackend.whenGET(/\.html$/).passThrough()

});
