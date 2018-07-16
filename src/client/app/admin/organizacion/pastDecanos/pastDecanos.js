(function(){
	'use strict';
	angular.module('app.admin.organizacion.pastDecanos')
		.controller('A-PastDecanos',PastDecanos);
    PastDecanos.$inject = ['A_decanosService','servicios','logger'];
	function PastDecanos(A_decanosService,servicios,logger){
		var vm=this;
        vm.eliminarimagenes=[];
        vm.buttonDate=[false,false];

        vm.decano=doData();
        vm.buttons={
            new:true
        }  
        vm.updates={};
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar; 
        vm.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1,
            minMode: 'year'
          };
        init();
        function init(){
            A_decanosService.getDecanos().then(function(data){
                vm.decanos=data;
                console.log(vm.decanos);
            })
        }
        vm.showDatepicker=function($event,idx){
            $event.preventDefault();
            $event.stopPropagation();
            vm.buttonDate[idx]=!vm.buttonDate[idx];
        }
        vm.select = function(id){
            var i = servicios.getPosicion(id,vm.decanos);
            vm.decano = JSON.parse(JSON.stringify(vm.decanos[i]));
            var inicio =vm.decano.mandato.split(' - ')[0];
            var fin=vm.decano.mandato.split(' - ')[1];
            vm.decano.mandato={};
            vm.decano.mandato.inicio=parseInt(inicio);
            vm.decano.mandato.fin=parseInt(fin);
            vm.eliminarDecano={
                eliminarimagenes:[],
                eliminarId:[]
            }
            vm.eliminarDecano.eliminarimagenes.push(vm.decano.decano)
            vm.eliminarDecano.id=vm.decano.id;
            vm.buttons={edit:true,delete:true};
            vm.updates.idSelected=id;
        }
        vm.guardar = function(form){
            if(form){
                vm.decano.mandato=vm.decano.mandato.inicio+' - '+vm.decano.mandato.fin;
                vm.decanoAux=JSON.parse(JSON.stringify(vm.decano));
                servicios.removeBlob(vm.decano);
                if(!vm.decano.id){
                    A_decanosService.saveDecano(vm.decano).then(function(data){
                        vm.decanoAux.id=data.id;
                        vm.decanoAux.decano=data.decano;
                        vm.decanos.push(vm.decanoAux);
                        vm.cancelar();
                    })
                }else{
                    vm.decano.eliminarimagenes=vm.eliminarimagenes;
                    A_decanosService.editDecano(vm.decano).then(function(data){
                        vm.decanoAux.decano=data.decano;
                        var i = servicios.getPosicion(vm.updates.idSelected,vm.decanos);
                        vm.decanos[i]=vm.decanoAux
                        vm.cancelar();
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.decano =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            vm.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
        }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
        } 
        function editar(){
            vm.updates.disabled=false;
        } 
        function eliminar(){
        	console.log(vm.eliminarDecano);
            A_decanosService.deleteDecano(vm.eliminarDecano).then(function(data){
                var i = servicios.getPosicion(vm.updates.idSelected,vm.decanos);
                vm.decanos.splice(i,1)
                vm.cancelar();
            })
        } 
        function doData(){
            return {
                nombre:'',
                mandato:{},
                decanoBlob:'',
            }
        }
	}	
}());
