(function(){
	'use strict';
	angular.module('app.client.organizacion')
		.run(appRun);

	appRun.$inject=['routehelper'];	
	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.organizacion',
				config:{
					url:'/Organizacion',
					templateUrl:'app/client/organizacion/organizacion.html',
					children:[],
					title:'Organizacion',
					settings:{
						nav:3,
						content:'Organizacion <i class="fas fa-angle-down"></i>'
					}

				}
			}		
		]
	}
}());