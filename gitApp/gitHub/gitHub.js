angular.module('gitApp').factory('gitHub',function($http) {

	var gitHub = {
		searchRepos: function searchRepos(query, callback) {
	        $http.get('https://api.github.com/search/repositories', { params: { q: query } })
	        .success(function (data) {
	            callback(null, data);
	        })
	        .error(function (e) {
	            callback(e);
	        });
		},
		getRepo: function getRepo(name, callback) {
    $http.get('https://api.github.com/repos/'+ name)
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
    },
    getReadme: function getReadme(name, callback) {
    $http.get('https://api.github.com/repos/'+ name +'/readme')
        .success(function (data) {
            callback(null, atob(data.content));
        })
        .error(function (e) {
            callback(e);
        });
},
getUserRepos: function getUser(name, callback) {
    $http.get('https://api.github.com/users/'+ name +'/repos')
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
}


	};

	return gitHub;
});