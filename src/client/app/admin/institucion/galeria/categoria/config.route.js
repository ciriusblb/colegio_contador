(function(){
	'use strict';
	 angular.module('app.admin.institucion.galeria.categoria')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.institucion.galeria.categoria',
		 		config : {
		 			url:'/:id',
		 			templateUrl : 'app/admin/institucion/galeria/categoria/categoria.html',
		 			controller : 'A-Categoria',
		 			controllerAs: 'vm',		 			 
		 			title : 'Categoria'
		 		}
		 	}
	 	];
	 }
}());