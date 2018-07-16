(function(){
	angular.module('app.login')
		.controller('Login',Login);

	Login.$inject=['$state','oneService','logger','$scope','$sce'];
	function Login($state,oneService,logger,$scope, $sce){
		var vm = this;
		vm.slickConfig = {
            dots: true,
            infinite: true,
            slidesToShow:1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
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
        $state.go("Login.usuario");
	}
}())

