(function(){
	'use strict';
	 angular.module('admin.servicios.recertificacion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'servicios.recertificacion',
		 		config : {
		 			url:'/Recertificacion',
		 			templateUrl : 'admin/servicios/recertificacion/recertificacion.html',
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