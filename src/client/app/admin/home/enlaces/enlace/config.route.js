(function(){
	'use strict';
	 angular.module('app.admin.home.enlaces')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.home.enlaces.enlace',
		 		config : {
		 			url:'/:id',
		 			templateUrl : 'app/admin/home/enlaces/enlace/enlace.html',
		 			controller : 'A-Enlace',
		 			controllerAs: 'vm',		 			 
		 			title : 'Enlace'
		 		}
		 	}
	 	];
	 }
}());