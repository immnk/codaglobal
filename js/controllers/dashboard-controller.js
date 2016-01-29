angular.module('codaglobal.controllers')
.controller('DashboardCtrl', ['$scope', '$state', 'TrainingService',
  function($scope, $state, TrainingService){
    init();

    function init(){
      console.log('Dashboard is initializing...');
      $scope.data = {};
      $scope.data.sort = 'rating';
      $scope.data.courses = ['iOS', 'Android', 
        'Web Development', 'Software Engineering'];
      $scope.data.selected = [];
      $scope.allCourses = [];

      TrainingService.getAllCourses().then(function(response){
        $scope.courses = response;
        $scope.allCourses = response;
      }, function(error){
        console.error('error occurred..');
      });

      TrainingService.getAllCategories().then(function(categories){
        $scope.data.courses = categories;
      }, function(error){
        console.error('error occurred');
      });
    }

    $scope.filterCourses = function(course, list){
      var idx = list.indexOf(course);
      if (idx > -1) list.splice(idx, 1);
      else list.push(course);

      var filt_courses = [];
      angular.forEach($scope.allCourses, function(crs){
        if(list.indexOf(crs.category) > -1){
          filt_courses.push(crs);
        }
      });

      if(filt_courses.length > 0)
        $scope.courses = filt_courses;
      else
        $scope.courses = $scope.allCourses;
    }

    $scope.getStars = function(number){
      return new Array(Math.floor(number));
    }

    $scope.isInt = function(number){
      return !(number % 1 === 0);
    }

}]);