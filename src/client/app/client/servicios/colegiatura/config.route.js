(function(){
	'use strict';
	 angular.module('app.client.servicios.colegiatura')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.servicios.colegiatura',
		 		config : {
		 			url:'/Colegiatura',
		 			templateUrl : 'app/client/servicios/colegiatura/colegiatura.html',
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