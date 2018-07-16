(function(){
	'use strict';
	angular.module('app.admin.home.noticias')
		.controller('A-Noticias',Noticias);
    Noticias.$inject = ['A_noticiasService','servicios','logger','$state','$rootScope'];
	function Noticias(A_noticiasService,servicios,logger,$state,$rootScope){
		var vm = this;
        init();
        $state.go('Admin.home.noticias.noticia', {id:0});  
        vm.updates=A_noticiasService.updates;

        $rootScope.$on('noticias',function(event, action){
            if(A_noticiasService.noticiaSelected){
                var i = servicios.getPosicion(A_noticiasService.noticiaSelected.id,vm.noticias);
                switch(action){
                    case 'nuevo': vm.noticias.push(A_noticiasService.noticiaSelected);break;
                    case 'editado': vm.noticias[i]=A_noticiasService.noticiaSelected;break;
                    case 'eliminado': vm.noticias.splice(i,1);break;
                }
                A_noticiasService.noticiaSelected=undefined;
                logger.success('Evento '+action+'!');
            }
        });
        function init(){
        	A_noticiasService.getNoticias().then(function(data){
        		vm.noticias=data;
        		console.log(vm.noticias);
        	});
        }
        vm.select = function(id){
            if(A_noticiasService.updates.disabled){
                vm.updates=A_noticiasService.updates={idSelected:id,disabled:true};
                var i = servicios.getPosicion(id,vm.noticias);
                A_noticiasService.noticiaSelected=vm.noticias[i];
        		$state.go('Admin.home.noticias.noticia', {id:id});  
            }
        }
	}	
}());
