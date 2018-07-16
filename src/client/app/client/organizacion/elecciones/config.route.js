(function(){
	'use strict';
	 angular.module('app.client.organizacion.elecciones')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.organizacion.elecciones',
		 		config : {
		 			url:'/Elecciones',
		 			templateUrl : 'app/client/organizacion/elecciones/elecciones.html',
		 			controller : 'Elecciones',
		 			controllerAs: 'vm',		 			 
		 			title : 'Elecciones',
		 			settings : {
			 				nav : 5,
			 				content : 'Elecciones'
		 			}

		 		}
		 	}
	 	];
	 }
}());