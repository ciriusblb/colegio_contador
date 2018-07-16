(function(){
	'use strict';
	angular.module('app.login.password')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Login.password',
				config:{
					url:'/password',
					templateUrl:'app/login/password/password.html',
					controller:'A-password',
					controllerAs:'vm',
					title:'Password',
				}
			}
		]
	}

}());