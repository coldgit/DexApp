angular.module('starter.services', [])

.factory('Anime_list', function($http,$rootScope) {
   return {
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
                     var out ={src:ani_selected.epi[x].src,title:ani_selected.title +" - "+ani_selected.epi[x].id};
                     return out;
                   }
                 }
                return null;

            }
        }
        return null;

  }
}

});
