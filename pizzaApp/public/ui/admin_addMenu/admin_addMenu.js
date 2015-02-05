angular.module('pizzApp').controller('AdminAddmenuCtrl',function($scope,services){
	
$scope.addItem = function(item){
	$scope.label= "Added Successfuly..";		
	var f = document.getElementById('image').files[0];
	$scope.item.image=f.name; 
	services.additem($scope.item,function(data){
	console.log(data);
		
	});
	};

});