(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.inject = [ShoppingListCheckOffService];
  function ToBuyController(ShoppingListCheckOffService){
    var buy = this;

    console.log(buy);
    buy.items = ShoppingListCheckOffService.getBuyItems();
    buy.removeBuyItems = function(item){ShoppingListCheckOffService.removeBuyItems(item);}
  }

  AlreadyBoughtController.inject = [ShoppingListCheckOffService];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
      bought.items= ShoppingListCheckOffService.getBoughtItems();
  }
   function ShoppingListCheckOffService(){
     var service = this;
      var buyItems = [
        {item_name: "cookies", item_quantity: 10},
        {item_name: "Milk",item_quantity: 2},
         {item_name: "Chips",item_quantity: 10}];

      var boughtItems = [];

      service.getBuyItems = function(){
        return buyItems;
      }

      service.removeBuyItems = function(index){

        boughtItems.push(buyItems[index]);
        buyItems.splice(index,1);
      }
      service.getBoughtItems = function(){
        return boughtItems;
      }
   }

  })();
