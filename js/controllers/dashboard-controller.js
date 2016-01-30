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

      // Get all the courses from database
      TrainingService.getAllCourses().then(function(response){
        $scope.courses = response;
        $scope.allCourses = response;
      }, function(error){
        console.error('error occurred..');
      });

      //Get all the categories from database
      TrainingService.getAllCategories().then(function(categories){
        $scope.data.courses = categories;
      }, function(error){
        console.error('error occurred');
      });
    }

    // course is selected checkbox and list is array of selected checkboxes
    $scope.filterCourses = function(course, list){
      // update the selected checkboxes
      var idx = list.indexOf(course);
      if (idx > -1) list.splice(idx, 1);
      else list.push(course);

      // Get the courses array which are found in selected array
      var filt_courses = [];
      angular.forEach($scope.allCourses, function(crs){
        if(list.indexOf(crs.category) > -1){
          filt_courses.push(crs);
        }
      });

      // If there are no courses display all courses
      if(filt_courses.length > 0)
        $scope.courses = filt_courses;
      else
        $scope.courses = $scope.allCourses;
    }

    // Get completed stars
    $scope.getStars = function(number){
      return new Array(Math.floor(number));
    }

    //Get half star if needed
    $scope.isInt = function(number){
      return !(number % 1 === 0);
    }

}]);