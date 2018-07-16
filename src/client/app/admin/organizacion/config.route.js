(function(){
	'use strict';
	angular.module('app.admin.organizacion')
		.run(appRun);

	appRun.$inject=['routehelper'];	
	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.organizacion',
				config:{
					url:'/Organizacion',
					templateUrl:'app/admin/organizacion/organizacion.html',
					children:[],
					title:'Organizacion',
					settings:{
						nav:3,
						content:'Organizacion <i class="fa fa-chevron-down"></i>'
					}

				}
			}		
		]
	}
}());