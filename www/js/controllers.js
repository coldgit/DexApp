angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Form data for the login modal
  $scope.regData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginmodal = modal;
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
      $location.path('/home');
  };

  // Triggered in the register modal to close it
  $scope.closeReg = function() {
    $scope.regmodal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginmodal.show();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.regmodal.show();
  };


  $scope.doRegister = function() {
    console.log('Registering', $scope.regData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
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
})

.controller('epiCtrl',function($scope, $stateParams , Anime_list) {
	$scope.anime_pick_epi = Anime_list.get_epi($stateParams.p_url,$stateParams._epi);
});
