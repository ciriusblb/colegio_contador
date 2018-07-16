(function(){
	'use strict';
	 angular.module('app.admin.home.noticias')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){
	 	routehelper.configureRoutes( getRoutes() );
	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.home.noticias',
		 		config : {
		 			url:'/Noticias',
		 			templateUrl : 'app/admin/home/noticias/noticias.html',
		 			controller : 'A-Noticias',
		 			controllerAs: 'vm',		 			 
		 			title : 'Noticias',
					go:'noticia',
		 			settings : {
			 				nav : 2,
			 				content : 'Noticias'
		 			}

		 		}
		 	}
	 	];
	 }
}());