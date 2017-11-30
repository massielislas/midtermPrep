var candidateApp = window.angular.module('candidateApp', [])

candidateApp.controller('mainCtrl', mainCtrl);
function mainCtrl($scope, $http){
  console.log("Is it working?");
  $scope.candidates = [];
  $scope.candidates.push({name : "Ryan", votes : 0, selected : 0});
  $scope.votedFor = [];

  $scope.addCandidate = function(){
    console.log("added candidate");
    $scope.candidates.push({
      name : $scope.candidateName,
      votes : 0,
      selected : 0
    })
  }

  $scope.votedCandidate = function(){
    console.log("You are here");
    for (let i = 0; i < $scope.candidates.length; i++){
      if($scope.candidates[i].selected == true){
        $scope.votedFor.push($scope.candidates[i]);
      }
    }
    console.log($scope.votedFor);
  }
}