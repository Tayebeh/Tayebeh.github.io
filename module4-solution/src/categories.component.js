(function () {
'use strict';
angular.module('MenuApp')
.component('categoryList',{
  templateUrl:'src/templates/sub-categories.html',
  bindings:{
    categories: '<'
  }
});
})();
