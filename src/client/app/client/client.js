(function(){
	angular.module('app.client')
		.controller('Client',Client);

	Client.$inject=['$state','routehelper','$scope','clientService'];
	function Client($state,routehelper,$scope,clientService){
		var vm = this;
		var routes = routehelper.getSubRoutes('Client');
		vm.navRoutes=routes;
		$scope.slickConfig3 = {
            dots: true,
            infinite: true,
            slidesToShow:6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
		init();
		function init(){
			activate();
		}
		function getNavRoutes(){
			vm.navRoutes = routes.filter(function(r){
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
		function activate(){
		    clientService.getEnlaces().then(function(data){
                vm.enlaces=data;
            })

		}

	}
}())
