(function () {
'use strict';
angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];
function MenuDataService($http){
  var service = this;
  service.getAllCategories = function(){
    var promise = $http({
       method:'GET',
       url:'https://davids-restaurant.herokuapp.com/categories.json'
     }).then(function(result){

        return result;
       });

    return promise;
  }

  service.getItemsForCategory= function(categoryShortName){
    console.log(categoryShortName);
    var promise = $http({
       method:'GET',
       url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
     }).then(function(result){
         console.log(result);
           return result;
       });

     return promise;
  }
}
})();
