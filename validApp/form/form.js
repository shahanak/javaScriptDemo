angular.module('validApp').controller('FormCtrl',function($scope,setget,$location){

$scope.user ={
	name:"",
	password:"",
	age:0,
	address1:"",
	address2:"",
	city:"",
	state:"",
	pincode:0,
	billaddress1:"",
	billaddress2:"",
	billcity:"",
	billstate:"",
	billpincode:0

};
  $scope.checkAddress = function(user){
  
        if($scope.user.checkshow === false){

            $scope.user.billaddress1 = $scope.user.address1;
            $scope.user.billaddress2 = $scope.user.address2;
            $scope.user.billstate = $scope. user.state;
            $scope.user.billcity = $scope.user.city;
            $scope.user.billpincode = $scope.user.pincode;
             
        }
        else
        {
            $scope.user.billaddress1 = "";
            $scope.user.billaddress2 = "";
            $scope.user.billstate = "";
            $scope.user.billcity = "";
            $scope.user.billpincode = "";
             
     
        }
  };
  $scope.set =function(user){    
   setget.set(user); 
 $location.path("/userdetails");
  };
  
});
