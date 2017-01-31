(function(){
'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

 NarrowItDownController.inject = [MenuSearchService];
  /** controller*/
  function NarrowItDownController(MenuSearchService){
    var narrow = this;
    narrow.narrowDown = function(searchTerm){
      narrow.message = "";
      narrow.found = [];
      if (searchTerm==undefined||searchTerm==''){
          narrow.message = 'Nothing is found';
      }
      else{
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function(response){
          narrow.found = response;
        }).
        catch(function(error){
          console.log("Error occured!");
          console.log(error);
        });

      }

    }
    narrow.remove = function(index){
        narrow.found.splice(index, 1);
    }


  };


MenuSearchService.inject = ['$http'];
  /** service*/
   function MenuSearchService($http){

    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
      var foundItems =[];
      return $http({
         method:'GET',
         url:'https://davids-restaurant.herokuapp.com/menu_items.json'
       }).then(function (result) {
          // process result and only keep items that match
          console.log (result.data.menu_items);

          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].description.includes(searchTerm))
             foundItems.push(result.data.menu_items[i]);
          }
          // return processed items
          return foundItems;
      });

    }

  }

  /** directive declaration */
  function FoundItems(){
    var ddo={

      scope:{
        found: '<',
        onRemove: '&'
    },
      templateUrl:"template.html"
    };
    return ddo;
  }


})();
