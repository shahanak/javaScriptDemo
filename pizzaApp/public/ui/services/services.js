angular.module('pizzApp').factory('services',function($http) {

	var services = {
		register: function(user,callback){
			$http({ method:'POST',
				data:user,
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/registration'				
										
			}).success(function (data) {
               console.log(data);            
				callback(data);
	        });
		},
		login: function(loginData,callback){
			$http({ method:'POST',
				data:loginData,
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/login'				
			}).success(function (data) {			
	            callback(data);	        
	        });
		},
		additem:function(itemData,callback){
			$http({ method:'POST',
				data:itemData,
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/additem'				
			}).success(function (data) {			
	            callback(data);	        
	        });
		},
		getItems:function(callback){
			$http({ method:'GET',
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/getitems'				
			}).success(function (data) {			
	            callback(data);	        
	        });
		},
		pizzaOrdered:{},
		setPizzaOrder:function(pizza){
			services.pizzaOrdered = pizza;
		},
		getPizzaOrder:function(callback){
			callback(services.pizzaOrdered);
		},
		currentUserData:{},
		setUserData : function(user){
			services.currentUserData = user;
			console.log(services.currentUserData);
		},
		getUserData:function(callback){
			callback(services.currentUserData);
		},
		checkout:function(order,callback){
			console.log(order);
			$http({ method:'POST',
				data:order,
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/orderNow'				
			}).success(function (data) {			
	            callback(data);	        
	        });
		},
		cart:0,
		getCart :function(callback){
			callback(services.cart);
		},
		setCart :function(){
			services.cart = services.cart + 1;
		},
		cartData:[],
		addToCart:function(pizza){				
			services.cartData[services.cart - 1] = pizza;
		},
		getCartItems:function(callback){
			callback(services.cartData);
		},
		loginStatus:0,
		setLogStatus:function(){
			services.loginStatus = 1;
		},
		getLogStatus:function(callback){
			callback(services.loginStatus);
		},
		getOrders:function(callback){
			$http({ method:'GET',
				headers: {'Content-Type': 'application/json; charset=UTF-8'},
				url:'http://localhost:3000/getOrders'				
			}).success(function (data) {			
	            callback(data);	        
	        });
		},
		logout:function(){
			services.loginStatus = 0;
		}
	};

	return services;
});