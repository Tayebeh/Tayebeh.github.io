(function () {
'use strict';
angular.module('MenuApp')
.component('itemsList',{
  templateUrl:'src/templates/sub-items.html',
  bindings:{
    items: '<'
  }
});
})();
