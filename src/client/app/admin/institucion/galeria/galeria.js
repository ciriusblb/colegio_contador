(function(){
	'use strict';
	angular.module('app.admin.institucion.galeria')
		.controller('A-Galeria',Galeria);
    Galeria.$inject = ['A_GaleriaService','logger','servicios','$state','$rootScope'];

    function Galeria(A_GaleriaService,logger,servicios,$state,$rootScope){
		var vm = this;
        vm.pager={};
        init();
        $state.go('Admin.institucion.galeria.categoria', {id:0});  
        vm.updates=A_GaleriaService.updates;

        $rootScope.$on('galeria',function(event, action){
            if(A_GaleriaService.categoriaSelected){
                var i = servicios.getPosicion(A_GaleriaService.categoriaSelected.id,vm.galeria);
                switch(action){
                    case 'nuevo': vm.galeria.push(A_GaleriaService.categoriaSelected);break;
                    case 'editado': vm.galeria[i]=A_GaleriaService.categoriaSelected;break;
                    case 'eliminado': vm.galeria.splice(i,1);break;
                }
                A_GaleriaService.categoriaSelected=undefined;
                logger.success('Evento '+action+'!');
            }
        });
        function init(){
            A_GaleriaService.getGaleria().then(function(data){
                vm.galeria=data;
                vm.items=vm.galeria;
            })
        }
        vm.select = function(id){
            if(A_GaleriaService.updates.disabled){
                vm.updates=A_GaleriaService.updates={idSelected:id,disabled:true};
                $state.go('Admin.institucion.galeria.categoria', {id:id});
            }
        }
	}	
}());

