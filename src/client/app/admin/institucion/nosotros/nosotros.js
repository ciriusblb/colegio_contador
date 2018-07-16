(function(){
	'use strict';
	angular.module('app.admin.institucion.nosotros')
		.controller('A-Nosotros',Nosotros);
    Nosotros.$inject = ['A_nosotrosService','servicios','logger'];
	function Nosotros(A_nosotrosService,servicios,logger){
		var vm = this;
		vm.nosotro=doData();
		vm.buttons={
            new:true
        }  
        vm.updates={};
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        init();

        function init(){
            A_nosotrosService.getNosotros().then(function(data){
                vm.nosotros=data;
                for (var i = 0; i < vm.nosotros.length; i++) {
                    vm.nosotros[i].texto=servicios.textToArray(vm.nosotros[i].descripcion);
                }
            }) 
        }
        vm.seleccionar=function(id){
            var i =servicios.getPosicion(id,vm.nosotros);
            vm.nosotro=JSON.parse(JSON.stringify(vm.nosotros[i]));
            vm.buttons={edit:true,delete:true};
            vm.updates.disabled=true; 
            vm.updates.idSelected=id; 
        }
        vm.guardar = function(formulario){
            if(formulario){
                vm.nosotro.texto=servicios.textToArray(vm.nosotro.descripcion);
                vm.nosotroAux=JSON.parse(JSON.stringify(vm.nosotro));

                if(!vm.nosotro.id){
                    A_nosotrosService.saveNosotro(vm.nosotro).then(function(data){
                        vm.nosotroAux.id=data.id;
                        vm.nosotros.push(vm.nosotroAux);
                        vm.cancelar();
                    }) 
                }else{
                    A_nosotrosService.editNosotro(vm.nosotro).then(function(data){
                        var i =servicios.getPosicion(vm.updates.idSelected,vm.nosotros);
                        vm.nosotros[i]=vm.nosotroAux;
                        vm.cancelar();
                    })
                }
            }else{
                logger.warning('¡Complete los campos!');
            }
        }
        vm.cancelar = function(){
            vm.nosotro=doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            vm.updates.idSelected=undefined;
        }
        function eliminar(){
            A_nosotrosService.removeNosotro({id:vm.nosotro.id}).then(function(data){
                var i =servicios.getPosicion(vm.updates.idSelected,vm.nosotros);
                vm.nosotros.splice(i,1);
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
                titulo:'',
                descripcion:'',
            } 
        }
	}	
}());