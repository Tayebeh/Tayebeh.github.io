(function(){
  "use strict";
  angular.module('public')
  .controller("SignupController",SignupController);
SignupController.$inject =["MenuService","UserService"];
function SignupController(MenuService,UserService){
  var signup = this;


  signup.validateMenuItem = function(){

    signup.error = "";
    MenuService.getMenuItem(signup.user.menunumber)
    .then(function successCallback(response){
        signup.user.menuItem = response;
        signup.error = "";
        signup.isMenuValid= true;
    }, function errorCallback(response) {
          signup.error ="menu item does not exist";
          signup.isMenuValid= false;
    });

  }

  signup.submit = function(){
    signup.message = "";
    if(signup.user!= undefined && signup.isMenuValid==true){
        UserService.setUser(signup.user);
        signup.message = "Your information has been saved.";
      };
    }

  }

})();
