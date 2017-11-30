var candidateApp = window.angular.module('candidateApp', [])

candidateApp.controller('mainCtrl', mainCtrl);
function mainCtrl($scope, $http){
  console.log("Is it working?");
  $scope.candidates = [];
  $scope.candidates.push({name : "Ryan", votes : 0, selected : 0});

  $scope.addCandidate = function(){
    console.log("added candidate");
    $scope.candidates.push({
      name : $scope.candidateName,
      votes : 0,
      selected : 0
    })
  }
}