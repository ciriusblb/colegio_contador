(function(){
	'use strict';
	 angular.module('app.client.servicios.recertificacion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.servicios.recertificacion',
		 		config : {
		 			url:'/Recertificacion',
		 			templateUrl : 'app/client/servicios/recertificacion/recertificacion.html',
		 			controller : 'Recertificacion',
		 			controllerAs: 'vm',		 			 
		 			title : 'Recertificacion',
		 			settings : {
			 				nav : 3,
			 				content : 'Recertificacion'
		 			}

		 		}
		 	}
	 	];
	 }
}());