(function(){
	'use strict';
	angular.module('app.admin.home')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Admin.home',
				config:{
					url:'/Home',
					templateUrl:'app/admin/home/home.html',
		 			children:[],
					title:'Home',
					settings:{
						nav:1,
						content:'Home <i class="fa fa-chevron-down"></i>'
					}
				}
			}
		]
	}

}());