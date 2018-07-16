(function(){
	'use strict';

	var core = angular.module('app.core')

	core.config(configure);
	core.config(toastrConfig);
	// core.config(tokenConfig);


    function toastrConfig(toastr){
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
    var config = {
        appErrorPrefix: '[NG-News-App Error] ', //configurar el exceptionHandler decorator
        appTitle: 'News-App Angular Admin',
        version: '1.0.0'
    };

    core.value('config', config);
	function configure($logProvider,$urlRouterProvider,$stateProvider,routehelperConfigProvider){
		//activa o desactiva el debugging
		if($logProvider.debugEnabled){
			$logProvider.debugEnabled(true);
		}
		routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
		routehelperConfigProvider.config.$stateProvider = $stateProvider;
		routehelperConfigProvider.config.docTitle = 'NG-Contadores';
	}
	// function tokenConfig($authProvider,$httpProvider,jwtInterceptorProvider,TOKEN_KEY){
	// 	$authProvider.loginUrl = 'http://localhost:8000/login/getPassword';
	// 		$authProvider.tokenName = "Token";
	// 		$authProvider.tokenPrefix = "myApp";

	// 		jwtInterceptorProvider.tokenGetter = function(){
	// 			return window.localStorage.getItem(TOKEN_KEY.myToken);
	// 		}

	// 		$httpProvider.interceptors.push("jwtInterceptor");
	// }
	// .config(['$authProvider','$httpProvider','jwtInterceptorProvider','TOKEN_KEY',function ($authProvider,$httpProvider,jwtInterceptorProvider,TOKEN_KEY){
	// 		$authProvider.loginUrl = 'http://localhost:8000/login/getPassword';
	// 		$authProvider.tokenName = "Token";
	// 		$authProvider.tokenPrefix = "myApp";

	// 		jwtInterceptorProvider.tokenGetter = function(){
	// 			return window.localStorage.getItem(TOKEN_KEY.myToken);
	// 		}

	// 		$httpProvider.interceptors.push("jwtInterceptor");
	// 	}])


}());