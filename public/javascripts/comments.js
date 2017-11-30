angular.module('Candidates', [])
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
  }
]);