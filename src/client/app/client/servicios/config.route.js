(function(){
	'use strict';
	angular.module('app.client.servicios')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.servicios',
				config:{
					url:'/Servicios',
					templateUrl:'app/client/servicios/servicios.html',
					children:[],
					abstract:true,
					title:'Servicios',
					settings:{
						nav:5,
						content:'Servicios <i class="fas fa-angle-down"></i>'
					}
				}
			}
		]
	}

}());