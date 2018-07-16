(function(){
	angular.module('app.admin')
		.controller('Admin',Admin);

	Admin.$inject=['$state','routehelper','$scope','TOKEN_KEY','jwtHelper','oneService'];
	function Admin($state,routehelper,$scope,TOKEN_KEY,jwtHelper,oneService){
		var vm = this;
		var routes = routehelper.getSubRoutes('Admin');
			$scope.navRoutes=routes;
		// vm.isCurrent = isCurrent;

		var tokens = window.localStorage.getItem(TOKEN_KEY.myToken);
		var user = jwtHelper.decodeToken(tokens);
		var finish = jwtHelper.getTokenExpirationDate(tokens);
		if(!$scope.navRoutes){
			// getNavRoutes();
		}
		
		function getNavRoutes(){
			$scope.navRoutes = routes.filter(function(r){
				return r.settings && r.settings.nav;
			}).sort(function(r1,r2){
				return r1.settings.nav - r2.settings.nav;
			});
		}
		function isCurrent(route){
			if(!route.title || !$state.current || !$state.current.title){
				return '';
			}
			var menuName = route.title;	
			return $state.current.title.substr(0,menuName.length) === menuName ? 'current':'';
		}
		vm.salir=function(){
			oneService.destroyUserToken();
		}
	}
}())