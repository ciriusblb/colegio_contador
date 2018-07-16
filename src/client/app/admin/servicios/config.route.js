(function(){
	'use strict';
	angular.module('app.admin.servicios')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.servicios',
				config:{
					url:'/Servicios',
					templateUrl:'app/admin/servicios/servicios.html',
					children:[],
					title:'Servicios',
					settings:{
						nav:5,
						content:'Servicios <i class="fa fa-chevron-down"></i>'
					}
				}
			}
		]
	}

}());