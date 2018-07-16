(function(){
	angular.module('app.login.password')
		.controller('A-password',Password);

	Password.$inject=['$state','oneService','logger','$scope','$sce'];
	function Password($state,oneService,logger,$scope,$sce){
		var vm = this;
		vm.Aux = 0;
		vm.popover=false;
		$scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">Contraseña incorrecta</b>');
		var contador = 0;
		if(!window.localStorage.getItem('usuario')){
			$state.go("Login.usuario");
		}
		vm.user = {
			username: window.localStorage.getItem('usuario'),
			password:''
		};
		console.log(vm.user);
		vm.sendPassword = function(){
			oneService.sendPassword(vm.user).then(function(data){
				return (data.message) ? ErrorController() : iniciar();
			});				
		}
		function ErrorController(){
			vm.user.password='';
			vm.popover=true;
			return (contador >= 2 ) ? reStart() : contador++;
		}
		function iniciar(){
			window.localStorage.removeItem('usuario');
			$state.go('Admin');
		}
		function reStart (){
			vm.user = {};
			contador = 0;
			window.localStorage.removeItem('usuario');
			logger.info('vuelva a intentarlo');
			$state.go('Login.usuario')

		}
	}
}())
