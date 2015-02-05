angular.module('validApp').factory('setget',function() {

	var setget = {
        userdata:{},
		set:function(user){
			setget.userdata = user;
			
		},
		get:function(callback){
			callback(setget.userdata);
		}
	};

	return setget;
});