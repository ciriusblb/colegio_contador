(function(){
	'use strict';
	 angular.module('app.admin.institucion.galeria')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.institucion.galeria',
		 		config : {
		 			url:'/Galeria',
		 			templateUrl : 'app/admin/institucion/galeria/galeria.html',
		 			controller : 'A-Galeria',
		 			controllerAs: 'vm',		 			 
		 			title : 'Galeria',
		 			settings : {
			 				nav : 3,
			 				content : 'Galeria'
		 			}

		 		}
		 	}
	 	];
	 }
}());