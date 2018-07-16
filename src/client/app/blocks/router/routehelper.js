(function(){
	'use strict';

	angular.module('blocks.router')
		.provider('routehelperConfig',routehelperConfig)
		.factory('routehelper',routehelper);
		// .run(changeStart);



		// function changeStart($rootScope,$state,oneService,AUTH_EVENTS){
		// 	console.log(oneService);
			// $rootScope.$on('$stateChangeStart',function(event, next, nextParams, fromState){
			// 	if (oneService.Autenticated() === 'error') {
			// 		if (next.name !== 'Login') {
			// 			event.preventDefault();
			// 			$state.go('Login');
			// 		}
			// 	}else{
			// 		if (next.name === 'Login') {
			// 			event.preventDefault();
			// 			$state.go('Admin');
			// 		}
			// 	}
			// })
		// }
	routehelper.$inject = ['$rootScope','$state','routehelperConfig'];

	function routehelperConfig (){
		this.config = {
			$urlRouterProvider : undefined,
			$stateProvider : undefined,
			docTitle : undefined
		};

		this.$get =  function(){
			return {config: this.config};
		};

	}
	var clientRoutes=[];
	var adminRoutes=[];

	function routehelper($rootScope,$state,routehelperConfig){
		// var routes = [];
		var $urlRouterProvider = routehelperConfig.config.$urlRouterProvider;
		var $stateProvider = routehelperConfig.config.$stateProvider;
		var service = {
			configureRoutes : configureRoutes,
			getRoutes : getRoutes,
			getSubRoutes: getSubRoutes
		};
		init();
		return service;
		function configureRoutes(routes){
            routes.forEach(function (route) {
                $stateProvider.state(route.name, route.config);
            });
            $urlRouterProvider.otherwise("/Client/Home");
        }
		function getRoutes(routes){
			var array=[];
			array = routes;
			var max=0;
			var delet=undefined;
			for (var i = 0; i < array.length; i++) {
				if(!array[i].name){
					array.splice(i,1);
				}
				max = Math.max(max,array[i].name.split('.').length);
			}
			for (var i = max; i > 1; i--) {
				for (var j = 0; j < array.length; j++) {
					if(array[j].name.split('.').length==i-1){
						var cont = array[j].name.length;
						for (var k = 0; k < array.length; k++) {
							if(array[k].name.split('.').length==i && array[j].name.substr(0,cont) == array[k].name.substr(0,cont) && array[k].settings){
								array[j].children.push(array[k])
							}
						}
					}
				}
			}
			var i =0;
			while(i<array.length){
				if(array[i].name.split('.').length!=2){
					array.splice(i,1);
				}else i++;
			}
			return array;
		}

		function getSubRoutes(mainRoute) {
			switch(mainRoute){
				case 'Client':
					return (clientRoutes.length>0) ? clientRoutes : clientRoutes=prueba(mainRoute);
				break;
				case 'Admin':
					return (adminRoutes.length>0) ? adminRoutes : adminRoutes=prueba(mainRoute);
				break;
			}
		}
		function prueba(mainRoute){
			var routes = [];
			for (var i = 0; i < $state.get().length; i++) {
				var route = $state.get()[i];
				var isRoute = !!route.title;
				if(route.name.split('.').length>1 && route.name.split('.')[0]==mainRoute){
					routes.push(route)
				}
			}
			return getRoutes(routes);

		}

		function init(){
			updateDocTitle();
		}

		function updateDocTitle(){
			$rootScope.$on('$stateChangeSuccess',function(event,toState,fromState){
				var title = routehelperConfig.config.docTitle + ' ' +(toState.title || '');
                    $rootScope.title = title;
			});
		}
	}



}());
