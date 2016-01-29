angular.module('codaglobal.controllers')
.controller('DashboardCtrl', ['$scope', '$state', 'TrainingService',
  function($scope, $state, TrainingService){
    init();

    function init(){
      console.log('Dashboard is initializing...');
      $scope.courses = [];

      TrainingService.getAllCourses().then(function(response){
        $scope.courses = response;
      }, function(error){
        console.log('error occurred..');
      });
    }

}]);