(function(){
	'use strict';
	 angular.module('app.admin.home.slider')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){
	 	routehelper.configureRoutes( getRoutes() );
	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.home.slider',
		 		config : {
		 			url:'/Slider',
		 			templateUrl : 'app/admin/home/slider/slider.html',
		 			controller : 'A-Slider',
		 			controllerAs: 'vm',		 			 
		 			title : 'Slider',
		 			settings : {
			 				nav : 1,
			 				content : 'Slider'
		 			}

		 		}
		 	}
	 	];
	 }
}());