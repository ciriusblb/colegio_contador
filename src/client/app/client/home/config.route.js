(function(){
	'use strict';
	angular.module('app.client.home')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.home',
				config:{
					url:'/Home',
					templateUrl:'app/client/home/home.html',
					controller:'Home',
					controllerAs:'vm',
					title:'Home',
					settings:{
						nav:1,
						content:'Home'
					}
				}
			}
		]
	}

}());