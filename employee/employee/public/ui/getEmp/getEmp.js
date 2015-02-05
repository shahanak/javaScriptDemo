angular.module('ui').factory('getEmp',function($http) {

	var getEmp = {
		getData:function getData(callback){		
			$http({ method:'GET',
				url:'http://localhost:3000/employee'				
			}).success(function (data) {			
	            callback(data);
	        })
	        .error(function (e) {
	            callback(e);
	        });
		}
	};

	return getEmp;
});