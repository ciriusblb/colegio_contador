(function(){
	'use strict';
	angular.module('app.client.colegiados.mienbrosColegiados')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.colegiados.mienbrosColegiados',
				config:{
					url:'/Mienbros_Colegiados',
					templateUrl:'app/client/colegiados/mienbrosColegiados/mienbrosColegiados.html',
					controller:'MienbrosColegiados',
					controllerAs:'vm',
					title:'Mienbros Colegiados',
					settings:{
						nav:1,
						content:'Mienbros Colegiados'
					}
				}
			}
		]
	}

}());