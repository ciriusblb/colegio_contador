(function(){
	'use strict';
	angular.module('app.admin.institucion.normasLegales')
		.controller('A-NormasLegales',NormasLegales);
    NormasLegales.$inject = ['logger','A_normasService','servicios'];
	function NormasLegales(logger,A_normasService,servicios){
        var vm=this;
        vm.archivo=false;
        vm.norma=doData();
        vm.buttons={
            new:true
        }  
        vm.updates={};
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.eliminarimagenes=[];

        init();

        function init(){
            A_normasService.getNormas().then(function(data){
                vm.normas=data;
            })
        }
        vm.seleccionar=function(id){
            var i =servicios.getPosicion(id,vm.normas);
            vm.norma=JSON.parse(JSON.stringify(vm.normas[i]));
            vm.buttons={edit:true,delete:true};
            vm.updates.disabled=true; 
            vm.updates.idSelected=id; 
            vm.norma.normaBlob=servicios.checkExtension(vm.norma.norma);

            vm.eliminarNorma={
                eliminarimagenes:[vm.norma.norma],
                id:id
            }
        }
        vm.guardar = function(formulario){
            if(formulario){
                vm.normaAux=JSON.parse(JSON.stringify(vm.norma));
                if(!vm.norma.id){
                    A_normasService.saveNorma(vm.norma).then(function(data){
                        vm.normaAux.id=data.id;
                        vm.normaAux.norma=data.norma;
                        vm.normas.push(vm.normaAux);
                        vm.cancelar();
                    }) 
                }else{
                    vm.norma.eliminarimagenes=vm.eliminarimagenes;
                    A_normasService.editNorma(vm.norma).then(function(data){
                        vm.normaAux.norma=data.norma;
                        var i =servicios.getPosicion(vm.updates.idSelected,vm.normas);
                        vm.normas[i]=vm.normaAux;
                        vm.cancelar();
                    })
                }
            }else{
                logger.warning('¡Complete los campos!');
            }
        }
        vm.cancelar = function(){
            vm.norma=doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            vm.updates.idSelected=undefined;

            vm.eliminarimagenes=[];
        }      
        function eliminar(){
            A_normasService.removeNorma(vm.eliminarNorma).then(function(data){
                var i =servicios.getPosicion(vm.updates.idSelected,vm.normas);
                vm.normas.splice(i,1);
                vm.cancelar();
            })
        }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
        }
        function doData(){
            return {
                id:'',
                titulo:'',
                nombre_archivo:'',
                normaBlob:'',
                fecha:new Date()
            }
        }
	}	
}());






