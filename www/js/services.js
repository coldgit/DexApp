angular.module('starter.services', [])

.factory('Anime_list', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var anime_lists = [
          { id:1,
            title:'One Piece',
            ani_url:'One-Piece',
            ani_banner:'/img/1-op.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:2,
            title:'Nanatsu No Taizai',
            ani_url:'Nanatsu-No-Taizai',
            ani_banner:'/img/2-nanatsu.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:3,
            title:'One Punch Man',
            ani_url:'One-Punch-Man',
            ani_banner:'/img/3-opm.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:4,
            title:'No Game No Life',
            ani_url:'No-Game-No-Life',
            ani_banner:'/img/4-ngnl.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          {
            id:5,
            title:'Shokugeki no Souma',
            ani_url:'Shokugeki-no-Souma',
            ani_banner:'/img/5-shokugeki.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:6,
            title:'Haikyuu',
            ani_url:'Haikyuu',
            ani_banner:'/img/6-haikyuu.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:7,
            title:'Blood Lad',
            ani_url:'Blood-Lad',
            ani_banner:'/img/7-bl.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:8,
            title:'Code Geass',
            ani_url:'Code-Geass',
            ani_banner:'/img/8-cg.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:9,
            title:'Death Note',
            ani_url:'Death-Note',
            ani_banner:'/img/9-dn.jpg',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          { id:10,
            title:'Jitsu wa Watashi wa',
            ani_url:'Jitsu-wa-Watashi-wa',
            ani_banner:'/img/10-jitsu.png',
            epi:[
              {id:1,src:'/uploads/video/1.mp4'},
              {id:2,src:'/uploads/video/1.mp4'},
              {id:3,src:'/uploads/video/1.mp4'},
              {id:4,src:'/uploads/video/1.mp4'},
              {id:5,src:'/uploads/video/1.mp4'},
              {id:6,src:'/uploads/video/1.mp4'},
              {id:7,src:'/uploads/video/1.mp4'},
              {id:8,src:'/uploads/video/1.mp4'},
              {id:9,src:'/uploads/video/1.mp4'},
              {id:10,src:'/uploads/video/1.mp4'},
            ],
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ];

  return {
    all: function()
    {
      return anime_lists;
    },
    remove: function(id)
    {
      anime_lists.splice(anime_lists.indexOf(id), 1);
    },
    get: function(_url)
    {
      for (var i = 0; i < anime_lists.length; i++)
      {
        if (anime_lists[i].ani_url === _url)
        {
          return anime_lists[i];
        }
      }
      return null;
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
                     return ani_selected.epi[x].src;
                   }
                 }
                return null;

            }
        }
        return null;

  }
}

});
