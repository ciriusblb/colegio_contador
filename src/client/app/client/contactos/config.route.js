(function(){
	'use strict';
	angular.module('app.client.contactos')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.Contactos',
				config:{
					url:'/Contactos',
					templateUrl:'app/client/contactos/contactos.html',
					controller:'Contactos',
					controllerAs:'vm',
					title:'Contactos',
					settings:{
						nav:7,
						content:'Contactos'
					}
				}
			}
		]
	}

}());