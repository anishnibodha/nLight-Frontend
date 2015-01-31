'use strict';

/**
 * HomePageCtrl
 * @constructor
 */
var HomePageCtrl = function($scope, $http, $location,$facebook,sharedservice) {
  /*********Adding  loading information ********/
$scope.loadJQuery = function(){
sharedservice.loadJQ1();
sharedservice.loadJQ2();
}
$scope.loadJQuery();



  /*********Adding  loading information end ********/
	$scope.displayLight1Popup = false;
	$scope.activationkey = "kede292lsi2lsi4nti5"
  $scope.map_light_style = "icon_light light_alert"
	$scope.lightInfo = false;

  $scope.loadPopupAction = function(response){
    console.log("The response is "+response);
    $scope.activeLightNo = "10";
    $scope.activeLightTime = "10/10/17";
    $scope.activeLightZone = "Startup Villege";
    $scope.activeLightLatitude = "12.886654";
    $scope.activeLightLongitude = "13.343567";
    $scope.currentlightId = 1;

  }

  $scope.lightClickAction = function(){
    var page = "http://localhost:8080/monitor/getinfo/1/dfdf";
        $http.get(page).success(function(response) {
          $scope.lightdetails = response;
          $scope.status = "on";
        })

    $scope.lightInfo = true;

  }

  $scope.manageStyle = function(){
    $scope.light1StyleClass = "icon_light light_alert";
    $scope.light2StyleClass = "icon_light light_alert";
    $scope.light3StyleClass = "icon_light light_alert";
    $scope.light4StyleClass = "icon_light light_alert";
    $scope.light5StyleClass = "icon_light light_alert";
    $scope.light6StyleClass = "icon_light light_alert";
    $scope.light7StyleClass = "icon_light light_alert";
    $scope.light8StyleClass = "icon_light light_alert";
    $scope.light9StyleClass = "icon_light light_alert";
    $scope.light10StyleClass = "icon_light light_alert";
    $scope.light11StyleClass = "icon_light light_alert";
    $scope.light12StyleClass = "icon_light light_alert";
    $scope.light13StyleClass = "icon_light light_alert";
    $scope.light14StyleClass = "icon_light light_alert";
    $scope.light15StyleClass = "icon_light light_alert";
    $scope.light16StyleClass = "icon_light light_alert";
    $scope.light17StyleClass = "icon_light light_alert";
    $scope.light18StyleClass = "icon_light light_alert";
    $scope.light19StyleClass = "icon_light light_alert";
    $scope.light20StyleClass = "icon_light light_alert";
    $scope.light21StyleClass = "icon_light light_alert";
  };
  $scope.manageStyle();

$scope.light1PopupClick = function(){
	$scope.displayLight1Popup = true;
}
  function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
      });
  }
  
  refresh();

  $scope.closeButton = function(){
		$scope.lightInfo = false;
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
		/*var page = "http://localhost:8080/control/blink/3/1/"+$scope.activationkey;
    	  $http.get(page).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})*/
    //$scope.changeLightStyle(".light_wrap .light_dim",$scope.currentlightId);
	}

	$scope.roundClickRight = function(){
		/*var page = "http://localhost:8080/control/blink/1/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})*/
   // $scope.changeLightStyle(".light_wrap .light_alert",$scope.currentlightId);
		
	}

	$scope.roundClickTop = function(){

		/*var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };


		var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/2/1/"+$scope.activationkey;*/
    /*var page = "http://localhost:8080/control/blink/2/1/"+$scope.activationkey;

    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})*/

     //   $scope.changeLightStyle(".light_wrap .light_on",$scope.currentlightId);
		
	}

	$scope.roundClickBottom = function(){

		/*var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };
*/

	/*	var page = "http://localhost:8080/control/blink/4/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})*/

       // $scope.changeLightStyle(".light_wrap .light_fused",$scope.currentlightId);
		
	}

	$scope.onoffcontrol = function(){


	var page = "http://localhost:8080/control/blink/0/1/"+$scope.activationkey;
    	  if($scope.status =="on"){
    	  	 $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "off";
      	})

    	  }
    	 
	}

  $scope.changeLightStyle = function(styleString,lightid){
    switch (lightid) {
    case 1:
         $scope.light1StyleClass = styleString;
        break;
    case 2:
          $scope.light1StyleClass = styleString;
        break;
    case 3:
        $scope.light1StyleClass = styleString;
        break;
    case 4:
       $scope.light1StyleClass = styleString;
        break;
    case 5:
        $scope.light1StyleClass = styleString;
        break;;
    case 6:
        $scope.light1StyleClass = styleString;
        break;
    case 7:
        $scope.light1StyleClass = styleString;
        break;
    case 8:
        $scope.light1StyleClass = styleString;
        break;
    case 9:
        $scope.light1StyleClass = styleString;
        break;
    case 10:
        $scope.light1StyleClass = styleString;
        break;
    case 11:
        $scope.light1StyleClass = styleString;
        break;
    case 12:
        $scope.light1StyleClass = styleString;
        break;
    case 13:
        $scope.light1StyleClass = styleString;
        break;
    case 14:
        $scope.light1StyleClass = styleString;
        break;
    case 15:
        $scope.light1StyleClass = styleString;
        break;
    case 16:
        $scope.light1StyleClass = styleString;
        break;
    case 17:
        $scope.light1StyleClass = styleString;
        break;
    case 18:
        $scope.light1StyleClass = styleString;
        break;
    case 19:
        $scope.light1StyleClass = styleString;
        break;
    case 20:
        $scope.light1StyleClass = styleString;
        break;
    case 21:
        $scope.light1StyleClass = styleString;
        break;
    
}
  }



	
}