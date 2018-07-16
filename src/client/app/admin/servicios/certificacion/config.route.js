(function(){
	'use strict';
	 angular.module('admin.servicios.certificacion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'servicios.certificacion',
		 		config : {
		 			url:'/Certificacion',
		 			templateUrl : 'admin/servicios/certificacion/certificacion.html',
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