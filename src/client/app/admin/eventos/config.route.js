(function(){
	'use strict';
	angular.module('app.admin.eventos')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.eventos',
				config:{
					url:'/Eventos',
					templateUrl:'app/admin/eventos/eventos.html',
					controller:'A-Eventos',
					controllerAs:'vm',
					title:'Eventos',
					settings:{
						nav:6,
						content:'Eventos '
					}
				}
			}
		]
	}

}());