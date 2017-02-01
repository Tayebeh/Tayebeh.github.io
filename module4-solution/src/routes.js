(function () {
'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
      controller: 'CategoriesController as category',
      resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/items.html',
      controller: 'ItemsController as item',
      resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        console.log($stateParams.categoryShortName);
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
    });

}

})();
