angular.module('starter.services', [])

<<<<<<< HEAD
.factory('Anime_list', function($rootScope) {
  // Might use a resource here that returns a JSON array

  $rootScope.DexApp = null;

  var anime_lists = [
          { id:1,
            title:'One Piece',
            ani_url:'One-Piece',
            ani_banner:'/img/1-op.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:2,
            title:'Nanatsu No Taizai',
            ani_url:'Nanatsu-No-Taizai',
            ani_banner:'/img/2-nanatsu.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:3,
            title:'One Punch Man',
            ani_url:'One-Punch-Man',
            ani_banner:'/img/3-opm.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:4,
            title:'No Game No Life',
            ani_url:'No-Game-No-Life',
            ani_banner:'/img/4-ngnl.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          {
            id:5,
            title:'Shokugeki no Souma',
            ani_url:'Shokugeki-no-Souma',
            ani_banner:'/img/5-shokugeki.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:6,
            title:'Haikyuu',
            ani_url:'Haikyuu',
            ani_banner:'/img/6-haikyuu.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:7,
            title:'Blood Lad',
            ani_url:'Blood-Lad',
            ani_banner:'/img/7-bl.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:8,
            title:'Code Geass',
            ani_url:'Code-Geass',
            ani_banner:'/img/8-cg.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:9,
            title:'Death Note',
            ani_url:'Death-Note',
            ani_banner:'/img/9-dn.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:10,
            title:'Jitsu wa Watashi wa',
            ani_url:'Jitsu-wa-Watashi-wa',
            ani_banner:'/img/10-jitsu.png',
            epi:[
              {id:1,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:2,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:3,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:4,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:5,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:6,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:7,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:8,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:9,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
              {id:10,src:'/uploads/video/1.mp4',likes:0,cmnt:[{profpic:'none',name:'John Doe',msg:'nice!',datetime:new Date()},]},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ];

 var Users = [
                {username:'a',password:'a',email:'johndoe@gmail.com',bookmarks:[{desc:'test'}],},
              ];

return {
 // setUpDatabase:function(){
    //   $rootScope.DexApp = window.openDatabase("DexApp.db","1","DexApp",1024 * 1024 * 100);
    //   if(!$rootScope.DexApp){
    //     console.log('SQLite is not Supported.');
    //   }else{
    //     console.log('SQLite is Supported.');
    //   }
    //   return;
    // },
    usersList: function()
    {
      return Users;
    },
    regUser: function(userData)
    {
     Users.push(userData);
        return true;
    },
    userLogin: function(loginData)
    {
      for(x = 0; x < Users.length; x++)
      {
        var credentials = {};
        if(Users[x].username == loginData.username && Users[x].password == loginData.password)
        {
          credentials = {
            'username': Users[x].username,
            'email': Users[x].email,
            'bookmarks':Users[x].bookmarks,
            'login':true,
          };
        }else{
          credentials = {
            'username':" ",
            'email': " ",
            'bookmarks':" ",
            'login':false,
          };
        }
        
      }
      return credentials;
    },
   
=======
.factory('Anime_list', function($http,$rootScope) {
   return {
>>>>>>> 3c00ecb467e2283d0728ab9273b65c5a1a8d2116
    all: function()
    {
      $http({
             method:'GET',
             url: 'http://localhost/DexApp-Server/anime',
             headers: { 'Content-Type' : 'application/x-www-form-urlencoded'},
           }).then(
             function(resp){
                 console.log(resp.data);
                 $rootScope.animes = resp.data;
                 $rootScope.$broadcast();
             },
             function(err){
               console.log(err);
             });
    },
    remove: function(id)
    {
      anime_lists.splice(anime_lists.indexOf(id), 1);
    },
    get: function(_url)
    {
      $http({
             method:'GET',
             url: 'http://localhost/DexApp-Server/anime/'+_url,
             headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
           }).then(
             function(resp){
                 console.log(resp.data[0]);
                 $rootScope.anime = resp.data[0];
                 // $location.path('anime/'+$rootScope.anime.ani_url);
             },
             function(err){
               console.log(err);
             });
       $http({
             method:'GET',
             url: 'http://localhost/DexApp-Server/anime/'+_url+'/episodes',
             headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
           }).then(
             function(resp){
                 console.log(resp.data);
                $rootScope.episodes = resp.data;
             },
             function(err){
               console.log(err);
             });
    },
      get_epi: function(_url,epi)
      {
       for (var i = 0; i < anime_lists.length; i++)
            {
                if (anime_lists[i].ani_url === _url)
                {
                    var ani_selected = anime_lists[i];

                    for(var x = 0; x < ani_selected.epi.length; x++)
                     {
                       if(ani_selected.epi[x].id === parseInt(epi))
                       {
                           var out = {
                                      prev:((ani_selected.epi[x].id > 1) ? (ani_selected.ani_url+"/"+(ani_selected.epi[x].id - 1)) : ani_selected.ani_url),
                                      next:((ani_selected.epi[x].id === ani_selected.epi.length || ani_selected.epi[x].id > ani_selected.epi.length)? ani_selected.ani_url : (ani_selected.ani_url+ "/" + (ani_selected.epi[x].id + 1 )) ),
                                      src:ani_selected.epi[x].src,
                                      title:ani_selected.title +" - "+ani_selected.epi[x].id,
                                      cmnt:ani_selected.epi[x].cmnt,
                                      newcmnt:function(nms,nwcmns){
                                          var ncmnt = {
                                                        profpic:'none',
                                                        name:nms,
                                                        msg:nwcmns,
                                                        datetime:new Date()
                                                      };
                                              ani_selected.epi[x].cmnt.push(ncmnt);
                                              return "";
                                          }
                                      };
                         return out;
                       }
                     }
                    return null;  
                }
            }
            return null;
      },
      bookmarks:function(data){
        console.log(data.username+"========"+data.ani_url);
    
        for (var i = 0; i < Users.length; i++) {
            if(Users[i].username == data.username)
            {
              // for (var x =  Users[i].bookmarks.length - 1; x >= 0; x--) {
              //   if(Users[i].bookmarks[x] == data.ani_url){
              //     Users[i].bookmarks.splice(x,1);
              //      console.log(Users[i].bookmarks);
              //   }else{
                   Users[i].bookmarks.push({desc:data.ani_url});
                    console.log(Users[i].bookmarks);
              //   }
              // }
              
             
            }
          }
      },
      my_bookmarks:function(username){
        for (var i = 0; i < Users.length;i++) {
          if(Users[i].username == username)
          {
           return Users[i].bookmarks;
          }
        }
        
      }
    }

});