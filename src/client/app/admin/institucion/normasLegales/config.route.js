(function(){
	'use strict';
	 angular.module('app.admin.institucion.normasLegales')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.institucion.normasLegales',
		 		config : {
		 			url:'/Normas_Legales',
		 			templateUrl : 'app/admin/institucion/normasLegales/normasLegales.html',
		 			controller : 'A-NormasLegales',
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