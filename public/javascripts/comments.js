var candidateApp = window.angular.module('candidateApp', [])

candidateApp.controller('mainCtrl', mainCtrl);
function mainCtrl($scope, $http){
  console.log("Is it working?");
  $scope.candidates = [];
  candidates.push({name : Ryan, votes : 0, selected : 0});
}