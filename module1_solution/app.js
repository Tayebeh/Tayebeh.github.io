(function(){
'use strict';



  function lunchCheckController ($scope){

    $scope.checkIFtooMuch = function(){
      if ($scope.lunchmenu== undefined)
        $scope.message = "Please enter data first" ;
    else  if ($scope.lunchmenu.split(',').length<=3)
        $scope.message = "Enjoy!";
      else if ($scope.lunchmenu.split(',').length>3)
        $scope.message = "Too Much";


      }

  }
  lunchCheckController.inject = ['scope'];
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',lunchCheckController);
})();
