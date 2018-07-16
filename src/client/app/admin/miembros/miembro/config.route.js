(function(){
	'use strict';
	angular.module('app.admin.miembros.miembro')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.miembros.miembro',
				config:{
					url:'/:id',
					templateUrl:'app/admin/miembros/miembro/miembro.html',
					controller:'A-Miembro',
					controllerAs:'vm',
					title:'Miembro'
				}
			}
		]
	}

}());