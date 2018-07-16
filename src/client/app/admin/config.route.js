(function(){
	'use strict';
	angular.module('app.admin')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin',
				config:{
					url:'/Admin',
					templateUrl:'app/admin/admin.html',
					controller:'Admin',
					controllerAs:'vm',
					title:'Admin'
				}
			}
		]
	}

}());