(function(){
	'use strict';
	 angular.module('app.admin.organizacion.pastDecanos')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.organizacion.pastDecanos',
		 		config : {
		 			url:'/Past_Decanos',
		 			templateUrl : 'app/admin/organizacion/pastDecanos/pastDecanos.html',
		 			controller : 'A-PastDecanos',
		 			controllerAs: 'vm',		 			 
		 			title : 'Past Decanos',
		 			settings : {
			 				nav : 2,
			 				content : 'Past Decanos'
		 			}

		 		}
		 	}
	 	];
	 }
}());