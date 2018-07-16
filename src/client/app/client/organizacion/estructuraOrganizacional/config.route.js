(function(){
	'use strict';
	 angular.module('app.client.organizacion.estructuraOrganizacional')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.organizacion.estructuraOrganizacional',
		 		config : {
		 			url:'/Estructura_Organizacional',
		 			templateUrl : 'app/client/organizacion/estructuraOrganizacional/estructuraOrganizacional.html',
		 			controller : 'EstructuraOrganizacional',
		 			controllerAs: 'vm',		 			 
		 			title : 'Estructura Organizacional',
		 			settings : {
			 				nav : 1,
			 				content : 'Estructura Organizacional'
		 			}

		 		}
		 	}
	 	];
	 }
}());