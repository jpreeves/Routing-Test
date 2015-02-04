
var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Page1', {
        templateUrl: 'templates/page1.html',
        controller: 'Page1Controller'
    }).
      when('/Page2', {
        templateUrl: 'templates/page2.html',
        controller: 'Page2Controller'
      }).
      otherwise({
        redirectTo: '/Page1'
      });
}]);
