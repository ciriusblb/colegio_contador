(function (){
	'use strict';
	angular.module('app.login')
	.service('oneService',oneService);
	function oneService ($resource,$auth,jwtHelper,TOKEN_KEY,$http,$state,logger){
		var isAuthenticated = window.localStorage.getItem('Authenticated');
		var authToken;
		loadUserToken();
		
		var resource = $resource('/login/:id',{id:'@id'},{
			'username': {method: 'GET'},
			'password': {method: 'POST'}
		});

		var services = {
			sendUsername:sendUsername,
			sendPassword:sendPassword,
			Autenticated:Autenticated,
			destroyUserToken:destroyUserToken			
		}

		return services;

		function Autenticated(){
			return isAuthenticated;
		}


		function sendUsername (data){
			return resource.username(data).$promise.then(function(data){
				return data;
			}).catch(function(error){
				if(error.status==404){
					// logger.info(error.data.message);
				}
				return error;
			})
		}



		function sendPassword(data){
			const passRequest = $auth.login(data).then(function(success){
				storeUserToken(success.data.token);
				return success;
			}).catch(function(error){
				if (error.status==404) {
					// logger.info(error.data.message);
					return {message: 'error'};
				}
			});
			return passRequest;
		}

		function loadUserToken(){
			var token = window.localStorage.getItem(TOKEN_KEY.myToken);
			return (token) ? useUserToken(token) : Error() ;
		}

		function Error(){
			window.localStorage.setItem('Authenticated','error');
			isAuthenticated = 'error';
			$state.go('Login');
		}

		function storeUserToken(token){
			window.localStorage.setItem(TOKEN_KEY.myToken,token);
			useUserToken(token);
		}

		function useUserToken(token){
			var user = jwtHelper.decodeToken(token);
			isAuthenticated = user.sub.type;
			window.localStorage.setItem('Authenticated',user.sub.type);
			authToken = token;
			$http.defaults.headers.common.Authorization = authToken;
		}

		function destroyUserToken(){
			authToken = undefined;
			isAuthenticated = 'error';
			$http.defaults.headers.common.Authorization = undefined;
			window.localStorage.removeItem(TOKEN_KEY.myToken);
			$state.go('Client.home')
		}

	}
}());