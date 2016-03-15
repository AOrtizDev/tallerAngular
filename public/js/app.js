(function () {
  var app = angular.module('cartelera',
    ['ngRoute', 'cartelera.controllers']
  );
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/cartelera.html',
      controller : 'carteleraCtrl'
    })
    .otherwise({
      redirectTo : '/'
    });
  }]);
})();
