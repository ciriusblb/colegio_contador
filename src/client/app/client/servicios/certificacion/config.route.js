(function(){
	'use strict';
	 angular.module('app.client.servicios.certificacion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.servicios.certificacion',
		 		config : {
		 			url:'/Certificacion',
		 			templateUrl : 'app/client/servicios/certificacion/certificacion.html',
		 			controller : 'Certificacion',
		 			controllerAs: 'vm',		 			 
		 			title : 'Certificacion',
		 			settings : {
			 				nav : 2,
			 				content : 'Certificacion'
		 			}

		 		}
		 	}
	 	];
	 }
}());