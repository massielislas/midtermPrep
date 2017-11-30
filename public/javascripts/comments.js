angular.module('Candidates', []);
.controller('MainCtrl', [
  '$scope',
  '$http',
  'CandidateFactory',
  function($scope, $http, candidateFactory){
    $scope.candidates =  ['Ben', 'Ryan', 'Maddy'];
  }
]);