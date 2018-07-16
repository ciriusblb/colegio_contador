(function(){
	'use strict';
	 angular.module('app.client.institucion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion',
		 		config : {
		 			url:'/Nuestra_Institucion',
		 			templateUrl : 'app/client/institucion/institucion.html',
		 			children:[],
		 			title : 'Normas Legales',
		 			settings : {
			 				nav : 2,
			 				content : 'Nuestra Institucion <i class="fas fa-angle-down"></i>'
		 			}

		 		}
		 	}
	 	];
	 }
}());