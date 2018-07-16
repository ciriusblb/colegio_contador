(function(){
	'use strict';
	 angular.module('app.client.institucion.himnoMDD')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Client.institucion.himnoMDD',
		 		config : {
		 			url:'/Himno_MDD',
		 			templateUrl : 'app/client/institucion/himnoMDD/himnoMDD.html',
		 			controller : 'HimnoMDD',
		 			controllerAs: 'vm',		 			 
		 			title : 'Himno de Madre de Dios',
		 			settings : {
			 				nav : 2,
			 				content : 'Himno de Madre de Dios'
		 			}

		 		}
		 	}
	 	];
	 }
}());