(function(){
	'use strict';
	 angular.module('app.admin.institucion.nosotros')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){
	 	routehelper.configureRoutes( getRoutes() );
	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.institucion.nosotros',
		 		config : {
		 			url:'/Nosotros',
		 			templateUrl : 'app/admin/institucion/nosotros/nosotros.html',
		 			controller : 'A-Nosotros',
		 			controllerAs: 'vm',		 			 
		 			title : 'Nosotros',
		 			settings : {
			 				nav : 2,
			 				content : 'Nosotros'
		 			}

		 		}
		 	}
	 	];
	 }
}());