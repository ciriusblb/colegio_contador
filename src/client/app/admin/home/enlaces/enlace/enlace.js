(function(){
	'use strict';
	angular.module('app.admin.home.enlaces')
		.controller('A-Enlace',Enlace);
    Enlace.$inject = ['A_enlacesService','$state','servicios','$rootScope','logger'];
	function Enlace(A_enlacesService,$state,servicios,$rootScope,logger){
		var vm = this;
        vm.eliminarimagenes=[];
        vm.buttons={
            new:true
        }  
        vm.updates=A_enlacesService.updates;
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.enlace=doData();
        if(A_enlacesService.enlaceSelected && $state.params.id!='0'){
            vm.enlace=JSON.parse(JSON.stringify(A_enlacesService.enlaceSelected));
            vm.eliminarEnlace={
                eliminarimagenes:[],
                eliminarId:[]
            }
            vm.eliminarEnlace.eliminarimagenes.push(vm.enlace.enlace)
            vm.eliminarEnlace.id=vm.enlace.id;
            vm.buttons={edit:true,delete:true};
        }
        // if($state.params.id!='0'){
        //     init();
        // }
        // function init(){
        //     A_enlacesService.getEnlace().then(function(data){
        //         vm.enlace=data;
        //         vm.eliminarEnlace={
        //             eliminarimagenes:[],
        //             eliminarId:[]
        //         }
        //         vm.eliminarEnlace.eliminarimagenes.push(vm.enlace.enlace)
        //         vm.eliminarEnlace.id=vm.enlace.id;
        //         vm.buttons={edit:true,delete:true};
        //     })

        // }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
            A_enlacesService.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
            A_enlacesService.updates.disabled=false;
        }
        function eliminar(){
            A_enlacesService.removeEnlace(vm.eliminarEnlace).then(function(data){
                A_enlacesService.enlaceSelected=vm.enlace;
                vm.cancelar();
                $rootScope.$broadcast('enlaces','eliminado');
            })
        }
        vm.guardar = function(form){
            if(form){
                vm.enlaceAux=JSON.parse(JSON.stringify(vm.enlace));

                servicios.removeBlob(vm.enlace);
                if(!vm.enlace.id){
                    A_enlacesService.saveEnlace(vm.enlace).then(function(data){
                        vm.enlaceAux.id=data.id;
                        vm.enlaceAux.enlace=data.enlace;
                        A_enlacesService.enlaceSelected=vm.enlaceAux;
                        vm.cancelar();
                        $rootScope.$broadcast('enlaces','nuevo');

                    })
                }else{
                    vm.enlace.eliminarimagenes=vm.eliminarimagenes;
                    A_enlacesService.editEnlace(vm.enlace).then(function(data){
                        vm.enlaceAux.enlace=data.enlace;
                        A_enlacesService.enlaceSelected=vm.enlaceAux;
                        vm.cancelar();
                        $rootScope.$broadcast('enlaces','editado');
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.enlace =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            A_enlacesService.updates.disabled=true;
            A_enlacesService.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
            $state.go('Admin.home.enlaces.enlace', {id:0});  
        }
        function doData(){
            return {
                titulo:'',
                enlaceBlob:'',
                url:'',
            }
        }
	}	
}());