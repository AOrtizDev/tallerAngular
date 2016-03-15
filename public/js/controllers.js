(function() {
  angular.module('cartelera.controllers', [])
  .controller('carteleraCtrl', ['$scope', function($scope) {
    $scope.titulo = "Kung Fu Panda 3";
    $scope.imagen = "http://static.cinemex.com/movie_posters/Q0SXC0lSxthw0SK-182x272.jpg";
    $scope.genero = "Animacion";
    $scope.pais = "Estados Unidos";
    $scope.duracion = "95 min";
  }]);
})();
