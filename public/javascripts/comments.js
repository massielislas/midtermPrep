var candidateApp = window.angular.module('candidateApp', [])

candidateApp.controller('mainCtrl', mainCtrl, 'scope', '$http');
function mainCtrl($scope, $http){
  console.log("Is it working?");
  $scope.candidates = [];
  $scope.votedFor = [];

  $scope.addCandidate = function(){
    console.log("added candidate");
    var addCandidate = {
      name : $scope.candidateName,
      votes : 0,
      selected : 0
    };
    $http.post("/candidates", addCandidate).then(function(response){
      $scope.candidates.push(addCandidate);
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

    for (let i = 0; i < $scope.votedFor.length; i++){
      $http.put('/candidates/' + $scope.candidates[i]._id + '/votes')
      .then(function(data){
      });
    }
  }


  $scope.getAll = function() {
    console.log("HERE WE ARE");
    return $http.get('/candidates').then(function(data){
      angular.copy(data, $scope.candidates);
    });
  };
  $scope.getAll();
}