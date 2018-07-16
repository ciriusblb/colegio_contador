(function(){
	'use strict';
	 angular.module('app.client.organizacion.juntaDecanos')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.organizacion.juntaDecanos',
		 		config : {
		 			url:'/Junta_De_Decanos',
		 			templateUrl : 'app/client/organizacion/juntaDecanos/juntaDecanos.html',
		 			controller : 'JuntaDecanos',
		 			controllerAs: 'vm',		 			 
		 			title : 'Junta De Decanos',
		 			settings : {
			 				nav : 3,
			 				content : 'Junta De Decanos'
		 			}

		 		}
		 	}
	 	];
	 }
}());