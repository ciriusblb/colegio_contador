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
		 		name: 'Admin.home.enlaces',
		 		config : {
		 			url:'/Enlaces',
		 			templateUrl : 'app/admin/home/enlaces/enlaces.html',
		 			controller : 'A-Enlaces',
		 			controllerAs: 'vm',		 			 
		 			title : 'Enlaces',
		 			settings : {
			 				nav : 4,
			 				content : 'Enlaces'
		 			}

		 		}
		 	}
	 	];
	 }
}());