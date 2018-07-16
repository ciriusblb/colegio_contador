(function(){
	'use strict';
	 angular.module('app.client.organizacion.pastDecanos')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.organizacion.pastDecanos',
		 		config : {
		 			url:'/Past_Decanos',
		 			templateUrl : 'app/client/organizacion/pastDecanos/pastDecanos.html',
		 			controller : 'PastDecanos',
		 			controllerAs: 'vm',		 			 
		 			title : 'Past Decanos',
		 			settings : {
			 				nav : 4,
			 				content : 'Past Decanos'
		 			}

		 		}
		 	}
	 	];
	 }
}());