var candidateApp = window.angular.module('Candidates', [])
candidateApp.controller('ai')
candidateApp.controller('mainCtrl', mainCtrl);
function mainCtrl($scope, $http){
  $scope.candidates = [];
  candidates.push({name : Ryan, votes : 0, selected : 0});
}