(function(){
	'use strict';
	 angular.module('app.client.eventos.eventos')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.eventos.eventos',
		 		config : {
		 			url:'/Eventos',
		 			templateUrl : 'app/client/eventos/eventos/eventos.html',
		 			controller : 'Eventos',
		 			controllerAs: 'vm',		 			 
		 			title : 'Eventos',
		 			settings : {
			 				nav : 4,
			 				content : 'Eventos'
		 			}

		 		}
		 	}
	 	];
	 }
}());