'use strict';

/**
 * LoginPageCtrl
 * @constructor
 */
var LoginPageCtrl = function($scope, $http, $location,$facebook) {
$scope.activationkey = "kede292lsi2lsi4nti5"
	 $scope.login = function() {
		    $facebook.login().then(function() {
		      refresh();
		    });
  }

   function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        /*$scope.welcomeMsg = "Welcome " + response.name;*/
        /*$scope.isLoggedIn = true;*/
        window.location = "#/home";
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
      });
  }
  
  refresh();

}