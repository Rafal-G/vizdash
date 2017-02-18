angular.module('vizdashApp').run(function($httpBackend) {
  var phones = [{name: 'phone1'}, {name: 'phone2'}];

  // returns the current list of phones
  $httpBackend.whenGET('/phones').respond(phones);

  // adds a new phone to the phones array
  $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    var phone = angular.fromJson(data);
    phones.push(phone);
    return [200, phone, {}];
  });

  // allow views directory to go to real $http
  // $httpBackend.whenGET (/.*/)
  // .passThrough()
  // $httpBackend.whenGET (/^\/views\//)
  //   .passThrough()
  // $httpBackend.whenGET (/^\/scripts\/.*/)
  //   .passThrough()
  // $httpBackend.whenGET (/^\/scripts\//)
  //   .passThrough()
  // $httpBackend.whenGET (/^\/bower_components\//)
  //   .passThrough()
  $httpBackend.whenGET(/\.html$/).passThrough()

});
