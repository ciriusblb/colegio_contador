(function(){
	'use strict';
	angular.module('app.client.eventos')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.eventos',
				config:{
					url:'/Eventos',
					templateUrl:'app/client/eventos/eventos.html',
					children:[],
					abstract:true,
					title:'Eventoss',
					settings:{
						nav:6,
						content:'Eventos <i class="fas fa-angle-down"></i>'
					}
				}
			}
		]
	}

}());