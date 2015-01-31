'use strict';
var nlightweb = angular.module('nlightweb', ['ngRoute','ngSanitize','ngFacebook','nsPopover','uiSwitch']);

/*nlightweb.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyD6L87AwVYDhgsr9fZrZFcAFTodPalqvIM',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})*/

nlightweb.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1409818072649966');
})

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

})

;


nlightweb.controller('mainCtrl',  function($scope,$http, $facebook) {
	$scope.activationkey = "kede292lsi2lsi4nti5"
  $scope.map_light_style = "icon_light light_alert"
	$scope.lightInfo = false;
  $scope.onoffswitch = true;
  $scope.showHome = false;
  $scope.showLogin = true;

$scope.addingDummyData = function(){


    var page = "http://localhost:8080/control/adddummy";
        $http.get(page).success(function(response) {
          alert("Added dummy data");
        })

    $scope.lightInfo = true;
  }

$scope.loginWithFB = function(){
    $facebook.login().then(function() {
          $scope.loginCheck();
        });
  }

  $scope.loginCheck = function() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
        $scope.showHome = true;
        $scope.showLogin = false;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
        $scope.showHome = false;
        $scope.showLogin = true;
      });
  }

  $scope.loginCheck();
  
  //refresh();

  $scope.closeButton = function(){
		$scope.lightInfo = false;
	}

  $scope.manageStyle = function(){
    var page = "http://localhost:8080/control/alllight";
        $http.get(page).success(function(response) {
         for (var i in response) {
            var currentLight = response[i];
              $scope.changeLightStyle(currentLight.lightStatus,currentLight.id);
          }
      });

  };
  $scope.manageStyle();

  $scope.lightClickAction = function(actionStyle){
      $scope.activeStyle = actionStyle;
      $scope.lightInfo = true;
      $scope.switchStatus = "switch green";
      $
  }

  $scope.loadPopupAction = function(id){
    
    $scope.currentlightId = id;
    var page = "http://localhost:8080/monitor/getinfo/"+id+"/dfdf";
        $http.get(page).success(function(response) {
          $scope.lightdetails = response;

          $scope.activeLightNo = id;
          $scope.activeLightTime = response.timestamp;
          $scope.activeLightZone = response.zone;
          $scope.activeLightLatitude = response.lightlat;
          $scope.activeLightLongitude = response.lightlot;

          $scope.status = "on";
        })
  }

	$scope.light1Click = function(){


		var page = "http://localhost:8080/monitor/getinfo/1/dfdf";
    	  $http.get(page).success(function(response) {
    		  $scope.lightdetails = response;
    		  $scope.status = "on";
      	})

		$scope.lightInfo = true;
	}
	

	$scope.roundClickLeft = function(){
   $scope.changeLightStyle("icon_light light_dim",$scope.currentlightId);
		var page = "http://localhost:8080/control/changestat/"+$scope.currentlightId+"/"+"icon_light light_dim";
    	  $http.get(page).success(function(response) {
    		  /*$scope.devices = response;
    		  $scope.status = "on";*/
      	});
	}

	$scope.roundClickRight = function(){

    $scope.changeLightStyle("icon_light light_alert",$scope.currentlightId);

    var page = "http://localhost:8080/control/changestat/"+$scope.currentlightId+"/"+"icon_light light_alert";
        $http.get(page).success(function(response) {
          /*$scope.devices = response;
          $scope.status = "on";*/
        });

		/*var page = "http://localhost:8080/control/blink/1/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})*/
		
	}

	$scope.roundClickTop = function(){

    $scope.changeLightStyle("icon_light light_on",$scope.currentlightId);

    var page = "http://localhost:8080/control/changestat/"+$scope.currentlightId+"/"+"icon_light light_on";
        $http.get(page).success(function(response) {
          /*$scope.devices = response;
          $scope.status = "on";*/
        });

	
	}

	$scope.roundClickBottom = function(){

   $scope.changeLightStyle("icon_light light_fused",$scope.currentlightId);

		var page = "http://localhost:8080/control/changestat/"+$scope.currentlightId+"/"+"icon_light light_fused";
        $http.get(page).success(function(response) {
          /*$scope.devices = response;
          $scope.status = "on";*/
        });
		
	}

	$scope.onoffcontrol = function(){

    if($scope.switchStatus == "switch green"){
        $scope.switchStatus = "switch red";
      }else{
        $scope.switchStatus = "switch green";
      }

	/*var page = "http://localhost:8080/control/blink/0/1/"+$scope.activationkey;
    	  if($scope.status =="on"){
    	  	 $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "off";
      	})

    	  }*/
    	 
	}


   $scope.changeLightStyle = function(styleString,lightid){
    switch (lightid) {
    case 1:
         $scope.light1StyleClass = styleString;
        break;
    case 2:
          $scope.light2StyleClass = styleString;
        break;
    case 3:
        $scope.light3StyleClass = styleString;
        break;
    case 4:
       $scope.light4StyleClass = styleString;
        break;
    case 5:
        $scope.light5StyleClass = styleString;
        break;;
    case 6:
        $scope.light6StyleClass = styleString;
        break;
    case 7:
        $scope.light7StyleClass = styleString;
        break;
    case 8:
        $scope.light8StyleClass = styleString;
        break;
    case 9:
        $scope.light9StyleClass = styleString;
        break;
    case 10:
        $scope.light10StyleClass = styleString;
        break;
    case 11:
        $scope.light11StyleClass = styleString;
        break;
    case 12:
        $scope.light12StyleClass = styleString;
        break;
    case 13:
        $scope.light13StyleClass = styleString;
        break;
    case 14:
        $scope.light14StyleClass = styleString;
        break;
    case 15:
        $scope.light15StyleClass = styleString;
        break;
    case 16:
        $scope.light16StyleClass = styleString;
        break;
    case 17:
        $scope.light17StyleClass = styleString;
        break;
    case 18:
        $scope.light18StyleClass = styleString;
        break;
    case 19:
        $scope.light19StyleClass = styleString;
        break;
    case 20:
        $scope.light20StyleClass = styleString;
        break;
    case 21:
        $scope.light21StyleClass = styleString;
        break;
    
}
  }


});