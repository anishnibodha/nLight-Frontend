'use strict';
var nlightweb = angular.module('nlightweb', ['ngRoute','ngSanitize','ngFacebook','nsPopover']);

nlightweb.config(['$routeProvider','$facebookProvider', function ($routeProvider, $facebookProvider) {
	$facebookProvider.setAppId('1516003982007229');
    $routeProvider.when('/login', {
        templateUrl: 'templates/loginPage.html',
        controller: LoginPageCtrl
    });

   $routeProvider.when('/home', {
        templateUrl: 'templates/homePage.html',
        controller: HomePageCtrl
    });
    

    $routeProvider.otherwise({redirectTo: '/login'});
}])

.run( function( $rootScope ) {
// Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());

}).directive('viewportWidth', function() {
    return {
      link: function(scope, elm, attrs) {
        function getViewport() {
          var e = window, a = 'inner';
          if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
          }
          return {
            width : e[a + 'Width'] ,
            height : e[a + 'Height']
          };
        }

        elm.css('maxWidth', getViewport().width + 'px');
      }
    };
  });