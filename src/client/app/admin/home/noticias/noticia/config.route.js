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
		 		name: 'Admin.home.noticias.noticia',
		 		config : {
		 			url:'/:id',
		 			templateUrl : 'app/admin/home/noticias/noticia/noticia.html',
		 			controller : 'A-Noticia',
		 			controllerAs: 'vm',		 			 
		 			title : 'Noticia'
		 		}
		 	}
	 	];
	 }
}());