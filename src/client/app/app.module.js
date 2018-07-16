(function(){
	'use strict';

	angular.module('app.main',[
		'app.core',
		'app.widgets',
			
		'app.client',
		'app.login',
		'app.admin'	

		])
		.config(['$authProvider','$httpProvider','jwtInterceptorProvider','TOKEN_KEY',function ($authProvider,$httpProvider,jwtInterceptorProvider,TOKEN_KEY){
			$authProvider.loginUrl = 'http://localhost:8000/login';
			$authProvider.tokenName = "Token";
			$authProvider.tokenPrefix = "myApp";

			jwtInterceptorProvider.tokenGetter = function(){
				return window.localStorage.getItem(TOKEN_KEY.myToken);
			}

			$httpProvider.interceptors.push("jwtInterceptor");
		}])
		.run(function($rootScope,$state,oneService,AUTH_EVENTS){
			$rootScope.$on('$stateChangeStart',function(event, next, nextParams, fromState){
				console.log(oneService.Autenticated());
				if (oneService.Autenticated() === 'error') {
					if (next.name === 'Admin') {
						event.preventDefault();
						$state.go('Login');
					}
				}else{
					if (next.name === 'Login') {
						event.preventDefault();
						$state.go('Admin');
					}
				}
			})
		});

}());



		// function changeStart($location,$state, $rootScope){
		// 	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParamsl) {
		// 		if(!window.localStorage.getItem("token")){
		// 			if(toState.name!='Sesion'){
		// 				event.preventDefault();
		//     			$state.go('Sesion');
		//     		}
		// 		}else{
		// 			if(toState.name=='Sesion'){
		// 				event.preventDefault();
		//     			$state.go('Vistas_Home');
		//     		}
		// 		}
		// 	});
		// }