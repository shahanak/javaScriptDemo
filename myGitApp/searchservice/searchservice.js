angular.module('myGitApp').factory('searchservice',function($http) {

	var searchservice = {
		searchRepos: function searchRepos(query, callback) {
	        $http.get('https://api.github.com/search/repositories', { params: { q: query } })
	        .success(function (data) {
	            callback(null, data);
	        })
	        .error(function (e) {
	            callback(e);
	        });
		},
		authentication:function(callback){
           $http({method : 'GET',
           url :'https://api.github.com',
           headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data){
             callback(data);
           });
		},
		checkstar : function(fullname,callback){
			 $http({method : 'GET',
              url :'https://api.github.com/user/starred/'+fullname+'',
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data,status,error){            
             callback(data,status,error);
           });
		},
			checkwatch : function(fullname,callback){
			 $http({method : 'GET',
              url :'https://api.github.com/user/subscriptions/'+fullname+'',
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data,status,error){            
             callback(data,status,error);
           });
		},
		starfun : function(fullname, callback){
		 $http({method : 'PUT',
              url :'https://api.github.com/user/starred/'+fullname+'',
             
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data,status,error){            
             callback(data,status,error);
           });
		},
		unstarfun : function(fullname, callback){
		 $http({method : 'DELETE',
              url :'https://api.github.com/user/starred/'+fullname+'',              
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(status){            
             callback(status);
           });
		},
		watchfun : function(fullname, callback){
		 $http({method : 'PUT',
              url :'https://api.github.com/user/subscriptions/'+fullname+'',
             
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data,status,error){            
             callback(data,status,error);
           });
		},
		unwatchfun : function(fullname, callback){
		 $http({method : 'DELETE',
              url :'https://api.github.com/user/subscriptions/'+fullname+'',              
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(status){            
             callback(status);
           });
		},
		listStarred : function(callback){
			$http({method : 'GET',
              url :'https://api.github.com/users/shahanak/starred',              
              headers:{ 'Authorization':'token a76a1e588dc8479511aab09613175fc0bd5fa607' }})
           .success(function(data){            
             callback(data);
           });
		}

	};

	return searchservice;
});