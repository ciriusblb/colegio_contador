(function(){
	'use strict';
	 angular.module('app.client.institucion.estatutoCPP')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.estatutoCPP',
		 		config : {
		 			url:'/Estatuto_CPP',
		 			templateUrl : 'app/client/institucion/estatutoCPP/estatutoCPP.html',
		 			controller : 'EstatutoCPP',
		 			controllerAs: 'vm',		 			 
		 			title : 'Estatuto del CPP Madre de Dios',
		 			settings : {
			 				nav : 5,
			 				content : 'Estatuto del CPP Madre de Dios'
		 			}

		 		}
		 	}
	 	];
	 }
}());