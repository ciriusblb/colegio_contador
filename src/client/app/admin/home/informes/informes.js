(function(){
	'use strict';
	angular.module('app.admin.home.informes')
		.controller('A-Informes',Informes);
    Informes.$inject = ['logger','A_InformeService','servicios'];
	function Informes(logger,A_InformeService,servicios){
        var vm=this;
        vm.archivo=false;
        vm.informe=doData();
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
            A_InformeService.getInformes().then(function(data){
                vm.informes=data;
                vm.informes.filter(function(item) {
				  return item.fecha=new Date(item.fecha);
				});

            })
        }
        vm.seleccionar=function(id){
            var i =servicios.getPosicion(id,vm.informes);
            vm.informe=JSON.parse(JSON.stringify(vm.informes[i]));
            vm.informe.fecha = new Date(vm.informe.fecha);

            vm.buttons={edit:true,delete:true};
            vm.updates.disabled=true; 
            vm.updates.idSelected=id; 
            vm.informe.informeBlob=servicios.checkExtension(vm.informe.informe);

            vm.eliminarInforme={
                eliminarimagenes:[vm.informe.informe],
                id:id
            }
        }
        vm.guardar = function(formulario){
            if(formulario && vm.informe.nombre_archivo){
                vm.informeAux=JSON.parse(JSON.stringify(vm.informe));
                if(!vm.informe.id){
                    A_InformeService.saveInforme(vm.informe).then(function(data){
                        vm.informeAux.id=data.id;
                        vm.informeAux.informe=data.informe;
                        vm.informes.push(vm.informeAux);
                        vm.cancelar();
                    }) 
                }else{
                    vm.informe.eliminarimagenes=vm.eliminarimagenes;
                    A_InformeService.editInforme(vm.informe).then(function(data){
                        vm.informeAux.informe=data.informe;
                        var i =servicios.getPosicion(vm.updates.idSelected,vm.informes);
                        vm.informes[i]=vm.informeAux;
                        vm.cancelar();
                    })
                }
            }else{
                logger.warning('¡Complete los campos!');
            }
        }
        vm.cancelar = function(){
            vm.informe=doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            vm.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
        }      
        function eliminar(){
            A_InformeService.removeInforme(vm.eliminarInforme).then(function(data){
                var i =servicios.getPosicion(vm.updates.idSelected,vm.informes);
                vm.informes.splice(i,1);
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
                header:'',
                titulo:'',
                descripcion:'',
                nombre_archivo:'',
                informeBlob:'',
                fecha:''
            }
        }
	}	
}());





