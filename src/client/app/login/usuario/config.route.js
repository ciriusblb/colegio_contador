(function(){
	'use strict';
	angular.module('app.login.usuario')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Login.usuario',
				config:{
					url:'/usuario',
					templateUrl:'app/login/usuario/usuario.html',
					controller:'A-usuario',
					controllerAs:'vm',
					title:'Usuario',
				}
			}
		]
	}

}());