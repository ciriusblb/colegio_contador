(function(){
	'use strict';
	 angular.module('app.client.eventos.seminarios')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.eventos.seminarios',
		 		config : {
		 			url:'/Seminarios',
		 			templateUrl : 'app/client/eventos/seminarios/seminarios.html',
		 			controller : 'Seminarios',
		 			controllerAs: 'vm',		 			 
		 			title : 'Seminarios',
		 			settings : {
			 				nav : 2,
			 				content : 'Seminarios'
		 			}

		 		}
		 	}
	 	];
	 }
}());