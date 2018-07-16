(function(){
	angular.module('app.login.usuario')
		.controller('A-usuario',Usuario);

	Usuario.$inject=['$state','oneService','logger','$scope','$sce'];
	function Usuario($state,oneService,logger,$scope,$sce){
		var vm = this;
		vm.usuario = window.localStorage.getItem('usuario');
		vm.popover=false;
		vm.user = {
			username:'',
			password:''
		};
		if(vm.usuario){
			vm.user.username=vm.usuario;
		}
		 $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">Usuario incorrecto</b>');

		vm.sendUsername = function(){
			if (vm.user.username !== vm.usuario){
				oneService.sendUsername(vm.user).then(function(data){
					if(data.username){
						window.localStorage.setItem('usuario',data.username);
						$state.go("Login.password"); 
					}else{
						vm.popover=true;
					}
				});		
			}
			else{
				$state.go("Login.password"); 
			}
		}
	}
}())
