angular.module('Candidates', [])
.controller('MainCtrl', [
  '$scope',
  '$http',
  function($scope, $http, candidateFactory){
    $scope.candidates =  ['Ben', 'Ryan', 'Maddy'];
  }
]);