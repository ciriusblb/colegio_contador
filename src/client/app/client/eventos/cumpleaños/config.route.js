(function(){
	'use strict';
	 angular.module('app.client.eventos.cumpleaños')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.eventos.cumpleaños',
		 		config : {
		 			url:'/Cumpleaños',
		 			templateUrl : 'app/client/eventos/cumpleaños/cumpleaños.html',
		 			controller : 'Cumpleaños',
		 			controllerAs: 'vm',		 			 
		 			title : 'Cumpleaños',
		 			settings : {
			 				nav : 1,
			 				content : 'Cumpleaños'
		 			}

		 		}
		 	}
	 	];
	 }
}());