(function(){
	'use strict';
	angular.module('app.client')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client',
				config:{
					url:'/Client',
		 			children:[],
					templateUrl:'app/client/client.html',
					controller:'Client',
					controllerAs:'vm',
					title:'Client'
				}
			}
		]
	}

}());