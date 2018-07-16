(function(){
	'use strict';
	 angular.module('app.client.institucion.nosotros')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.nosotros',
		 		config : {
		 			url:'/Nosotros',
		 			templateUrl : 'app/client/institucion/nosotros/nosotros.html',
		 			controller : 'Nosotros',
		 			controllerAs: 'vm',		 			 
		 			title : 'Nosotros',
		 			settings : {
			 				nav : 4,
			 				content : 'Nosotros'
		 			}

		 		}
		 	}
	 	];
	 }
}());