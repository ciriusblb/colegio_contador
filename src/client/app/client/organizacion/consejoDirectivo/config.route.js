(function(){
	'use strict';
	 angular.module('app.client.organizacion.consejoDirectivo')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.organizacion.consejoDirectivo',
		 		config : {
		 			url:'/Consejo_Directivo',
		 			templateUrl : 'app/client/organizacion/consejoDirectivo/consejoDirectivo.html',
		 			controller : 'ConsejoDirectivo',
		 			controllerAs: 'vm',		 			 
		 			title : 'Consejo Directivo',
		 			settings : {
			 				nav : 2,
			 				content : 'Consejo Directivo'
		 			}

		 		}
		 	}
	 	];
	 }
}());