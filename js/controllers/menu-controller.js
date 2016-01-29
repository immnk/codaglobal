angular.module('codaglobal.controllers')
.controller('MenuCtrl', ['$scope', '$state',
  function($scope, $state){
    init();

    function init(){
      console.log('Menu is initializing...');
    }

}]);