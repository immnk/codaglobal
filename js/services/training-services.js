angular.module('codaglobal.services')

.factory('TrainingService', ['$q', '$http', '$httpParamSerializer',
 function($q, $http, $httpParamSerializer){

  var factory = {};
  var courses = [];

  init();

  function init(){
    console.log('Training service is being initialized...');
  }

  factory.getAllCourses = function(){
    var deferred = $q.defer();
    
    if(courses.length == 0){
      $http.get('http://www.json-generator.com/api/json/get/bQcLSJFkde')
        .then(function(response){
          if(response.status == 200){
            var db_items = response.data;
            angular.forEach(db_items, function(course){
              courses.push({
                id: course.pnum,
                category: course.category,
                rating: course.rating,
                description: course.description,
                title: course.title,
                url: course.url,
                image: course.image,
                type: course.type,
                price: course.price
              });
            });
            
            console.log("Fetched all items : " + JSON.stringify(courses));

            deferred.resolve(courses);
          }
        }, function(error){
          console.log('Couldnt fetch all inventory items from database...');
          deferred.reject(error);
      });
    } else{
      console.log(courses);
      deferred.resolve(courses);
    }
    return deferred.promise;
  }

  return factory;
}]);