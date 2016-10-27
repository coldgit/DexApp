angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$rootScope, $ionicModal, $timeout, $location,$ionicPopover,$ionicPopup,Anime_list) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // Form data for the login modal
  $scope.loginData = {};
 
  $scope.regData = {
                      username: "",
                      password:"",
                      repassword:"",
                      email:""
                  };
  $scope.passwordmatch = true;
  $scope.check = function(){
                             $scope.passwordmatch = ((  $scope.regData.password!=  $scope.regData.repassword)? false:true);
                          }
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
                                                        scope: $scope
                                                      }).then(function(modal) {
                                                        $scope.loginmodal = modal;
                                                      });

  $ionicModal.fromTemplateUrl('templates/spinner-loading.html', {
                                                        scope: $scope
                                                      }).then(function(modal) {
                                                        $scope.spinner_loading = modal;
                                                      });

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
                                                        scope: $scope
                                                      }).then(function(modal) {
                                                        $scope.regmodal = modal;
                                                      });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
                                  $scope.loginmodal.hide();
                               //     $location.path('/home');
                                }

  // Triggered in the register modal to close it
  $scope.closeReg = function() {
                                $scope.regData;
                                $scope.regmodal.hide();
                              }

  // Open the login modal
  $scope.login = function() {
                              $scope.loginmodal.show();
                            }

  // Open the register modal
  $scope.register = function() {
                                $scope.regmodal.show();
                              }


  $scope.doRegister = function() {
    //console.log(regData);
    console.log($scope.regData);
    var userInfo = {
                    username:$scope.regData.username,
                    password:$scope.regData.password,
                    email:$scope.regData.email,
                    bookmarks:[],
    };

    if(Anime_list.regUser(userInfo))
    {
       console.log(Anime_list.usersList()); 
       $timeout(function() {
        $scope.closeReg();
            $scope.showSuccess('Registration Complete!');
        $scope.login();

      }, 1000);
    } else{
      $scope.showAlert('Invalid!');
    }
    //Simulate a login delay. Remove this and replace with your login
    // code if using a login system
<<<<<<< HEAD
    
  }

  $scope.bookmarks = function(user){
   $scope.booked = Anime_list.my_bookmarks(user);
   console.log( $scope.booked);
  }
// Perform the login action when the user submits the login form
  $scope.doLogin = function() 
  {
    console.log('Doing login',Anime_list.userLogin($scope.loginData));

    $rootScope.userInfos = Anime_list.userLogin($scope.loginData);
    if($rootScope.userInfos.login)
    {
          console.log('login!',$rootScope.userInfos);
          $timeout(function()
          {
            $scope.closeLogin();

            $location.path('app/dexapp');
            
            $scope.showSuccess('Welcome To DexApp '+$rootScope.userInfos.username+"!");
          }, 1000);  
    }
    else{
      $scope.showAlert('Invalid Username or Password!');
    }   
  }

  $scope.logout = function(){
    $rootScope.userInfos = { 'login':false} ;
    console.log($rootScope.userInfos);
    $location.path('home');
  }
  
  $scope.showSuccess = function(msg)
   {
      var alertPopup = $ionicPopup.alert({
        title:'Success Message',
        template:msg
      });
  }
   
  $scope.showAlert = function(msg)
   {
      var alertPopup = $ionicPopup.alert({
        title:'Warning Message',
        template:msg
      }); 
  }
})

.controller('Dash_Ctrl',function($scope, $stateParams , Anime_list,$rootScope,$location) {
  console.log($rootScope.userInfos);
  $scope.dash_list = Anime_list.all();

})  

.controller('singleCtrl',function($scope, $stateParams , Anime_list,$rootScope,$location) {
// $scope.Anime_list.execute();
    console.log($rootScope.userInfos);
    $scope.username = $rootScope.userInfos.username;
    console.log($scope.username);
  
    $scope.add_bookmarks = function(user,anime_url){
      var data = {
        username:user,
        ani_url:anime_url
      };
      Anime_list.bookmarks(data);
    }
    $scope.anime_pick = Anime_list.get($stateParams._url);
    console.log($scope.anime_pick);
 
=======
    $timeout(function() {
      $scope.closeReg();
      $scope.login();

    }, 1000);
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
      $location.path('app/dexapp');

    }, 1000);
  };
})
//.controller('coverCtrl',function($scope){});
//.controller('ProfileCtrl', function($scope, $stateParams , Profiles) {
	//$scope.profile = Profiles.get($stateParams.profileId);
//})
.controller('Dash_Ctrl',function($scope, $stateParams ,$rootScope, Anime_list) {
  Anime_list.all();
	$scope.dash_list = $rootScope.animes;
  console.log($scope.dash_list);
})

.controller('singleCtrl',function($scope, $rootScope,$stateParams , Anime_list) {
  Anime_list.get($stateParams._url);
	$rootScope.anime;
  $rootScope.episodes;
>>>>>>> 3c00ecb467e2283d0728ab9273b65c5a1a8d2116
})

.controller('epiCtrl',function($scope, $stateParams , Anime_list,$rootScope,$location) {
   $scope.username = $rootScope.userInfos.username;
    console.log($scope.username);
   $scope.anime_pick_epi = Anime_list.get_epi($stateParams.p_url,$stateParams._epi);
    console.log($scope.anime_pick_epi);
  
});
