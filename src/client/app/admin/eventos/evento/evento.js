(function(){
    'use strict';
    angular.module('app.admin.eventos.evento')
        .controller('A-Evento',Evento);
    Evento.$inject = ['A_eventosService','$state','servicios','$rootScope'];
    function Evento(A_eventosService,$state,servicios,$rootScope){
        var vm = this;
        var monthsName=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

        vm.eliminarimagenes=[];
        vm.open=false;
        vm.buttons={
            new:true
        }  
        vm.updates=A_eventosService.updates;
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.eliminarDato=eliminarDato;
        vm.evento =doData();

        if($state.params.id!='0'){
            init();
        }

        function init(){
            A_eventosService.getEvento().then(function(data){
                console.log(data);
                vm.evento=data;
                vm.evento.fecha=new Date(vm.evento.fecha);   
                vm.evento.eliminarId=[];
                var arreglos={
                    ponente:vm.evento.ponentes
                }
                vm.evento.agregarimagenes=servicios.getArrayOfAddImg(arreglos); 


                vm.eliminarEvento={
                    eliminarimagenes:[],
                    eliminarId:[]
                }
                for (var i = 0; i < vm.evento.ponentes.length; i++) {
                    vm.eliminarEvento.eliminarId.push(vm.evento.ponentes[i].id);
                    vm.eliminarEvento.eliminarimagenes.push(vm.evento.ponentes[i].ponente);
                }
                vm.eliminarEvento.eliminarimagenes.push(vm.evento.cuenta,vm.evento.preEvento,vm.evento.evento)
                vm.eliminarEvento.id=vm.evento.id;
                vm.buttons={edit:true,delete:true};
            })
        }

        vm.agregarPonente = function(){
            var ponente = {id:vm.evento.ponentes.length,nombre:'', especialidad:'', ponenteBlob:'',agregar:1};
            vm.evento.ponentes.push(ponente);
        }
        function eliminarDato(idx){
            if(vm.evento.id && vm.evento.ponentes[idx].id_evento){
                vm.evento.eliminarId.push(vm.evento.ponentes[idx].id);
            }
            if(vm.evento.ponentes[idx].ponente && typeof(vm.evento.ponentes[idx].ponente)=='string'){
                vm.eliminarimagenes.push(vm.evento.ponentes[idx].ponente);
            }
            vm.evento.ponentes.splice(idx,1);
        }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
            A_eventosService.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
            A_eventosService.updates.disabled=false;
        }
        function eliminar(){
            A_eventosService.deleteEvento(vm.eliminarEvento).then(function(data){
                A_eventosService.eventoSelected=vm.evento;
                vm.cancelar();
                $rootScope.$broadcast('eventos','eliminado');
            })
        }
        vm.guardar = function(form){
            if(form){
                servicios.removeBlob(vm.evento);
                for (var i = 0; i < vm.evento.ponentes.length; i++) {
                    servicios.removeBlob(vm.evento.ponentes[i]);
                    for(var properity in vm.evento.ponentes[i]){
                        vm.evento[properity+i]=vm.evento.ponentes[i][properity];
                    }
                }
                vm.evento.cantidadPonentes=vm.evento.ponentes.length;
                delete vm.evento.ponentes;
                vm.evento.anio=vm.evento.fecha.getFullYear();
                vm.evento.mes=monthsName[vm.evento.fecha.getMonth()];
                if(!vm.evento.id){
                                        console.log(vm.evento);
                    A_eventosService.saveEvento(vm.evento).then(function(data){
                        vm.evento.id=data.id;
                        A_eventosService.eventoSelected=vm.evento;
                        vm.cancelar();
                        $rootScope.$broadcast('eventos','nuevo');
                    })
                }else{
                    vm.evento.eliminarimagenes=vm.eliminarimagenes;
                    A_eventosService.editEvento(vm.evento).then(function(data){
                        A_eventosService.eventoSelected=vm.evento;
                        vm.cancelar();
                        $rootScope.$broadcast('eventos','editado');
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.evento =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            A_eventosService.updates.disabled=true;
            A_eventosService.updates.idSelected=undefined;
            vm.eliminarimagenes=[];
            $state.go('Admin.eventos.evento', {id:0});  
        }
        function doData(){
            return {
                titulo:'',
                lugar:'',
                fecha:'',
                hora:'',
                inscripcion:'',
                descripcion:'',
                ponentes:[
                    {
                        id:0,
                        nombre:'',
                        especialidad:'',
                        ponenteBlob:''
                    }
                ],
                cuentaBlob:'',
                preEventoBlob:'',
                eventoBlob:''
            }
        }
    }   
}());