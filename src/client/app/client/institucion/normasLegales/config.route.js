(function(){
	'use strict';
	 angular.module('app.client.institucion.normasLegales')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.normasLegales',
		 		config : {
		 			url:'/Normas_Legales',
		 			templateUrl : 'app/client/institucion/normasLegales/normasLegales.html',
		 			controller : 'NormasLegales',
		 			controllerAs: 'vm',		 			 
		 			title : 'Normas Legales',
		 			settings : {
			 				nav :1,
			 				content : 'Normas Legales'
		 			}

		 		}
		 	}
	 	];
	 }
}());