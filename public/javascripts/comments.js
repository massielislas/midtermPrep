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
      $http.put('/candidates/' + $scope.votedFor[i]._id + '/votes')
      .then(function(data){
      });
    }
  }

$scope.delete = function(candidate){
  $http.delete('/candidates/' + candidate._id).then(function(response){
    var index = $scope.candidates.indexOf(candidate);
    $scope.candidates.splice(index, 1);
    console.log(response);
  })
}


  $scope.getAll = function() {
    console.log("HERE WE ARE");
    return $http.get('/candidates').then(function(response){
      angular.copy(response.data, $scope.candidates);
    });
  };
  $scope.getAll();
}