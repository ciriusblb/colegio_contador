(function(){
	'use strict';
	 angular.module('app.client.institucion.himnoCP')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.himnoCP',
		 		config : {
		 			url:'/Himno_CP',
		 			templateUrl : 'app/client/institucion/himnoCP/himnoCP.html',
		 			controller : 'HimnoCP',
		 			controllerAs: 'vm',		 			 
		 			title : 'Himno del Contador Público',
		 			settings : {
			 				nav : 3,
			 				content : 'Himno del Contador Público'
		 			}

		 		}
		 	}
	 	];
	 }
}());