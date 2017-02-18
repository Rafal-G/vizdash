angular.module('vizdashApp').run(function ($httpBackend) {
  var initService = {'processStatus': 'On',
                      'cpuUsage': 0,
                      'memoryUsage':0,
                      'uptime': 0,
                      'instances': 0};

  $httpBackend.whenGET('/v1/process/create').respond(initService);



  // adds a new phone to the phones array
  // $httpBackend.whenPOST('/phones').respond(function (method, url, data) {
  //   var phone = angular.fromJson(data);
  //   phones.push(phone);
  //   return [200, phone, {}];
  // });

  // allow views directory to go to real $http
  $httpBackend.whenGET(/\.html$/).passThrough()

});
