(function(){
	'use strict';
	angular.module('app.login')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Login',
				config:{
					url:'/Login',
					templateUrl:'app/login/login.html',
					controller:'Login',
					controllerAs:'vm',
					title:'Login'
				}
			}
		]
	}

}());