
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform,Anime_list , $state, $rootScope, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
     $rootScope.userInfos = {login:false}; 
       if($rootScope.userInfos.login == false)
       {
        console.log($rootScope.userInfos);
          $location.path('home');
       }   
   // Anime_list.setUpDatabase();
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
  })

  .state('app.about', {
      url: '/about', 
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('app.dexapp', {
      url: '/dexapp',
      views: {
        'menuContent': {
          templateUrl: 'templates/dexapp.html',
          controller:'Dash_Ctrl',
        }
      }
    })


    .state('app.anime',{
      url:'/anime/:_url',
      views:{
        'menuContent': {
          templateUrl: 'templates/anime.html',
          controller:'singleCtrl',
        }
      },


    })

    .state('app.epi',{
      url:'/anime/:p_url/:_epi',
      views:{
        'menuContent': {
          templateUrl: 'templates/epi.html',
          controller:'epiCtrl'  ,
        }
      }

    })


    .state('app.account',{
      url:'/account',
      views:{
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller:'AppCtrl'  ,
        }
      }

    })

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller:'AppCtrl',

    })
  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
});
