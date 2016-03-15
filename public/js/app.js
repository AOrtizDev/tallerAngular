(function () {
  var app = angular.module('cartelera', ['ngRoute']);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/cartelera.html'
    })
    .otherwise({
      redirectTo : '/'
    });
  }]);
})();
