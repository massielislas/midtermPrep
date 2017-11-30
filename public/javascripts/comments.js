angular.module('Candidates', ['ui.router'])
.factory('candidateFactory',[function(){
  var o = {
    candidates : ['Ben', 'Ryan', 'Maddy']
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  '$http',
  'CandidateFactory',
  function($scope, $http, candidateFactory){
    $scope.candidates =  candidateFactory.candidates;
    $scope.candidates.push({
      name = $scope.candidateName,
      votes = 0
    })
  }
]);