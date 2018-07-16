(function(){
	'use strict';
	 angular.module('admin.servicios.colegiatura')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'servicios.colegiatura',
		 		config : {
		 			url:'/Colegiatura',
		 			templateUrl : 'admin/servicios/colegiatura/colegiatura.html',
		 			controller : 'Colegiatura',
		 			controllerAs: 'vm',		 			 
		 			title : 'Colegiatura',
		 			settings : {
			 				nav : 1,
			 				content : 'Colegiatura'
		 			}

		 		}
		 	}
	 	];
	 }
}());