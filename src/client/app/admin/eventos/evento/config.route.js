(function(){
	'use strict';
	 angular.module('app.admin.eventos.evento')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.eventos.evento',
		 		config : {
		 			url:'/:id',
		 			templateUrl : 'app/admin/eventos/evento/evento.html',
		 			controller : 'A-Evento',
		 			controllerAs: 'vm',		 			 
		 			title : 'Evento'
		 		}
		 	}
	 	];
	 }
}());