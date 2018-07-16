(function(){
	'use strict';
	 angular.module('app.client.eventos.evento')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.eventos.evento',
		 		config : {
		 			url:'/:id',
		 			templateUrl : 'app/client/eventos/evento/evento.html',
		 			controller : 'Evento',
		 			controllerAs: 'vm',		 			 
		 			title : 'Evento',
		 		}
		 	}
	 	];
	 }
}());