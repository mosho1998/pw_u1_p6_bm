// Define el módulo Angular
var app = angular.module('holaMundoApp', []);

// Define el controlador
app.controller('HolaMundoController', function($scope) {
  $scope.mensaje = 'Hola Mundo';
});
