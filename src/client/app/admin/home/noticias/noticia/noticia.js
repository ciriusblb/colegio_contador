(function(){
	'use strict';
	angular.module('app.admin.home.noticias')
		.controller('A-Noticia',Noticia);
    Noticia.$inject = ['A_noticiasService','$state','servicios','$rootScope','logger'];

	function Noticia(A_noticiasService,$state,servicios,$rootScope,logger){
		var vm = this;
        vm.eliminarimagenes=[];
        vm.buttons={
            new:true
        }  
        vm.updates=A_noticiasService.updates;
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.noticia=doData();
        if(A_noticiasService.noticiaSelected && $state.params.id!='0'){
            vm.noticia=JSON.parse(JSON.stringify(A_noticiasService.noticiaSelected));
            vm.eliminarNoticia={
                eliminarimagenes:[],
                eliminarId:[]
            }
            vm.eliminarNoticia.eliminarimagenes.push(vm.noticia.noticia)
            vm.eliminarNoticia.id=vm.noticia.id;
            vm.buttons={edit:true,delete:true};
        }
        // if($state.params.id!='0'){
        //     init();
        // }
        // function init(){
        //     A_noticiasService.getNoticia().then(function(data){
        //         vm.noticia=data;
        //         vm.eliminarNoticia={
        //             eliminarimagenes:[],
        //             eliminarId:[]
        //         }
        //         vm.eliminarNoticia.eliminarimagenes.push(vm.noticia.noticia)
        //         vm.eliminarNoticia.id=vm.noticia.id;
        //         vm.buttons={edit:true,delete:true};
        //     })
        // }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
            A_noticiasService.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
            A_noticiasService.updates.disabled=false;
        }
        function eliminar(){
            A_noticiasService.removeNoticia(vm.eliminarNoticia).then(function(data){
                A_noticiasService.noticiaSelected=vm.noticia;
                vm.cancelar();
                $rootScope.$broadcast('noticias','eliminado');
            })
        }
        vm.guardar = function(form){
            if(form){
                vm.noticiaAux=JSON.parse(JSON.stringify(vm.noticia));
                servicios.removeBlob(vm.noticia);
                if(!vm.noticia.id){
                    A_noticiasService.saveNoticia(vm.noticia).then(function(data){
                        vm.noticiaAux.id=data.id;
                        vm.noticiaAux.noticia=data.noticia;
                        A_noticiasService.noticiaSelected=vm.noticiaAux;
                        vm.cancelar();
                        $rootScope.$broadcast('noticias','nuevo');

                    })
                }else{
                    vm.noticia.eliminarimagenes=vm.eliminarimagenes;
                    A_noticiasService.editNoticia(vm.noticia).then(function(data){
                        vm.noticiaAux.noticia=data.noticia;
                        A_noticiasService.noticiaSelected=vm.noticiaAux;
                        vm.cancelar();
                        $rootScope.$broadcast('noticias','editado');
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.noticia =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            A_noticiasService.updates.disabled=true;
            A_noticiasService.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
            $state.go('Admin.home.noticias.noticia', {id:0});  
        }
        function doData(){
            return {
                titulo:'',
                descripcion:'',
                noticiaBlob:'',
                fecha:new Date(),
                fuente:''
            }
        }
	}	
}());