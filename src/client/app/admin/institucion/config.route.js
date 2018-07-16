(function(){
	'use strict';
	 angular.module('app.admin.institucion')
	 	.run(appRun);

	appRun.$inject = ['routehelper'];

	 function appRun(routehelper){

	 	routehelper.configureRoutes( getRoutes() );

	 }

	 function getRoutes(){
	 	return[
		 	{
		 		name: 'Admin.institucion',
		 		config : {
		 			url:'/Nuestra_Institucion',
		 			templateUrl : 'app/admin/institucion/institucion.html',
		 			children:[],
		 			title:'institucion',
		 			settings : {
			 				nav : 2,
			 				content : 'Nuestra Institucion <i class="fa fa-chevron-down"></i>'
		 			}

		 		}
		 	}
	 	];
	 }
}());