(function(){
	'use strict';
	 angular.module('app.client.institucion.galeria')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.galeria',
		 		config : {
		 			url:'/Galeria',
		 			templateUrl : 'app/client/institucion/galeria/galeria.html',
		 			controller : 'Galeria',
		 			controllerAs: 'vm',		 			 
		 			title : 'Galeria',
		 			settings : {
			 				nav : 6,
			 				content : 'Galeria'
		 			}

		 		}
		 	}
	 	];
	 }
}());