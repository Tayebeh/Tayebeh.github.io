angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject=['items'];
function ItemsController(items){
  var item = this;
  item.items =items.data.menu_items;
    console.log('item.items');
  console.log(item.items);
}
