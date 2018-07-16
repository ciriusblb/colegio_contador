(function(){
	'use strict';
	angular.module('app.client.colegiados')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.colegiados',
				config:{
					url:'/Colegiados',
					templateUrl:'app/client/colegiados/colegiados.html',
					children:[],
					title:'colegiados',
					settings:{
						nav:4,
						content:'Colegiados <i class="fas fa-angle-down"></i>'
					}
				}
			}
		]
	}

}());