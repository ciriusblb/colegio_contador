(function(){
	'use strict';
	angular.module('app.admin.institucion.galeria.categoria')
		.controller('A-Categoria',Categoria);
    Categoria.$inject = ['A_GaleriaService','$state','servicios','$rootScope','logger'];

	function Categoria(A_GaleriaService,$state,servicios,$rootScope,logger){
		var vm = this;
        vm.eliminarimagenes=[];
        vm.buttons={
            new:true
        }  
        vm.updates=A_GaleriaService.updates;
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.eliminarDato=eliminarDato;

        vm.categoria=doData();

        if($state.params.id!='0'){
            init();
        }
        function init(){
            A_GaleriaService.getCategoria().then(function(data){
                vm.categoria=data;
                vm.categoria.eliminarId=[];
                var arreglos={
                    galeria:vm.categoria.galerias
                }
                vm.categoria.agregarimagenes=servicios.getArrayOfAddImg(arreglos); 
                vm.eliminarCategoria={
                    eliminarimagenes:[],
                    eliminarId:[]
                }
                for (var i = 0; i < vm.categoria.galerias.length; i++) {
                    vm.eliminarCategoria.eliminarId.push(vm.categoria.galerias[i].id);
                    vm.eliminarCategoria.eliminarimagenes.push(vm.categoria.galerias[i].galeria);
                }
                vm.eliminarCategoria.id=vm.categoria.id;
                vm.buttons={edit:true,delete:true};
                console.log(vm.categoria);
            })
        }
        vm.agregargaleria = function(){
            var galeria = {id:vm.categoria.galerias.length, galeriaBlob:'',agregar:1};
            vm.categoria.galerias.push(galeria);
        }
        function eliminarDato(idx){
            if(vm.categoria.id && vm.categoria.galerias[idx].id_galeria){
                vm.categoria.eliminarId.push(vm.categoria.galerias[idx].id);
            }
            if(vm.categoria.galerias[idx].galeria && typeof(vm.categoria.galerias[idx].galeria)=='string'){
                vm.eliminarimagenes.push(vm.categoria.galerias[idx].galeria);
            }
            vm.categoria.galerias.splice(idx,1);
        }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
            A_GaleriaService.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
            A_GaleriaService.updates.disabled=false;
        }
        function eliminar(){
            A_GaleriaService.deleteCategoria(vm.eliminarCategoria).then(function(data){
                A_GaleriaService.categoriaSelected=vm.categoria;
                vm.cancelar();
                $rootScope.$broadcast('galeria','eliminado');
            })
        }
        vm.guardar = function(form){
            if(form){
                servicios.removeBlob(vm.categoria);
                for (var i = 0; i < vm.categoria.galerias.length; i++) {
                    servicios.removeBlob(vm.categoria.galerias[i]);
                    for(var properity in vm.categoria.galerias[i]){
                        vm.categoria[properity+i]=vm.categoria.galerias[i][properity];
                    }
                }
                vm.categoria.cantidadGalerias=vm.categoria.galerias.length;
                delete vm.categoria.galerias;
                if(!vm.categoria.id){
                    A_GaleriaService.saveCategoria(vm.categoria).then(function(data){
                        console.log('data',data);
                        vm.categoria.id=data.id;
                        A_GaleriaService.categoriaSelected=vm.categoria;
                        vm.cancelar();
                        $rootScope.$broadcast('galeria','nuevo');
                    })
                }else{
                    vm.categoria.eliminarimagenes=vm.eliminarimagenes;
                    A_GaleriaService.editCategoria(vm.categoria).then(function(data){
                        A_GaleriaService.categoriaSelected=vm.categoria;
                        vm.cancelar();
                        $rootScope.$broadcast('galeria','editado');
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.categoria =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            A_GaleriaService.updates.disabled=true;
            A_GaleriaService.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
            $state.go('Admin.institucion.galeria.categoria', {id:0});  
        }
        function doData(){
            return {
                categoria:'',
                galerias:[
                    {
                        id:0,
                        galeriaBlob:''
                    }
                ]
            }
        }
	}	
}());