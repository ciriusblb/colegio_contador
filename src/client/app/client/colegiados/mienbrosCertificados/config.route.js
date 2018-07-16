(function(){
	'use strict';
	angular.module('app.client.colegiados.mienbrosCertificados')
		.run(appRun);

	appRun.$inject=['routehelper'];

	function appRun(routehelper){
		return routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [
			{
				name:'Client.colegiados.mienbrosCertificados',
				config:{
					url:'/Mienbros_Certificados',
					templateUrl:'app/client/colegiados/mienbrosCertificados/mienbrosCertificados.html',
					controller:'MienbrosCertificados',
					controllerAs:'vm',
					title:'Mienbros Certificados',
					settings:{
						nav:2,
						content:'Mienbros Certificados'
					}
				}
			}
		]
	}

}());