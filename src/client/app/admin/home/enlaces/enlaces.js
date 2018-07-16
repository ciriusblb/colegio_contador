(function(){
	'use strict';
	angular.module('app.admin.home.enlaces')
		.controller('A-Enlaces',Enlaces);
    Enlaces.$inject = ['A_enlacesService','servicios','logger','$state','$rootScope'];
	function Enlaces(A_enlacesService,servicios,logger,$state,$rootScope){
		var vm = this;
        init();
        $state.go('Admin.home.enlaces.enlace', {id:0});  
        vm.updates=A_enlacesService.updates;

        $rootScope.$on('enlaces',function(event, action){
            if(A_enlacesService.enlaceSelected){
                var i = servicios.getPosicion(A_enlacesService.enlaceSelected.id,vm.enlaces);
                switch(action){
                    case 'nuevo': vm.enlaces.push(A_enlacesService.enlaceSelected);break;
                    case 'editado': vm.enlaces[i]=A_enlacesService.enlaceSelected;break;
                    case 'eliminado': vm.enlaces.splice(i,1);break;
                }
                A_enlacesService.enlaceSelected=undefined;
                logger.success('Enlace '+action+'!');
            }
        });
        function init(){
        	A_enlacesService.getEnlaces().then(function(data){
        		vm.enlaces=data;
        		console.log(vm.enlaces);
        	});
        }
        vm.select = function(id){
            if(A_enlacesService.updates.disabled){
                vm.updates=A_enlacesService.updates={idSelected:id,disabled:true};
                var i = servicios.getPosicion(id,vm.enlaces);
                A_enlacesService.enlaceSelected=vm.enlaces[i];
        		$state.go('Admin.home.enlaces.enlace', {id:id});  
            }
        }
	}	
}());