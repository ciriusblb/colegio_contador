(function(){
	'use strict';
	 angular.module('app.admin.home.informes')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){
	 	routehelper.configureRoutes( getRoutes() );
	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.home.informes',
		 		config : {
		 			url:'/Informes',
		 			templateUrl : 'app/admin/home/informes/informes.html',
		 			controller : 'A-Informes',
		 			controllerAs: 'vm',		 			 
		 			title : 'Informe',
		 			settings : {
			 				nav : 3,
			 				content : 'Informes'
		 			}

		 		}
		 	}
	 	];
	 }
}());