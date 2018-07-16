(function(){
	'use strict';
	angular.module('app.admin.miembros')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.miembros',
				config:{
					url:'/Miembros',
					templateUrl:'app/admin/miembros/miembros.html',
					controller:'A-Miembros',
					controllerAs:'vm',
					go:'miembro',
					title:'miembros',
					settings:{
						nav:4,
						content:'Miembros '
					}
				}
			}
		]
	}

}());