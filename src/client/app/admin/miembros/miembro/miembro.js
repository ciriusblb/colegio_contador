(function(){
    'use strict';
    angular.module('app.admin.miembros.miembro')
        .controller('A-Miembro',Miembro);
    Miembro.$inject = ['miembrosService','$state','servicios','$rootScope','logger'];
    function Miembro(miembrosService,$state,servicios,$rootScope,logger){
        var vm = this;

        vm.buttonDate=[false,false,false,false];
        vm.buttons={
            new:true
        }  
        vm.updates=miembrosService.updates;
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.miembro = doData();

        if($state.params.id!='0'){
            init();
        }

        function init(){
            miembrosService.getMiembro().then(function(data){
                vm.miembro=data;
                vm.miembro.fecha_Nac=new Date(vm.miembro.fecha_Nac);
                vm.miembro.vigencia=new Date(vm.miembro.vigencia);
                vm.miembro.incorporacion=new Date(vm.miembro.incorporacion);
                if(vm.miembro.fecha_caducidad){
                    vm.miembro.fecha_caducidad=new Date(vm.miembro.fecha_caducidad);
                }
                vm.buttons={edit:true,delete:true};
            })
        }
        function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
            miembrosService.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
            miembrosService.updates.disabled=false;
        }
        function eliminar(){
            miembrosService.deleteMiembro({id:vm.miembro.id}).then(function(data){
                miembrosService.miembroSelected=vm.miembro;
                vm.cancelar();
                $rootScope.$broadcast('miembros','eliminado');
            })
        }
        vm.showDatepicker=function($event,idx){
            $event.preventDefault();
            $event.stopPropagation();
            vm.buttonDate[idx]=!vm.buttonDate[idx];
        }
        vm.guardar = function(form){
          if(form){
              if(!vm.miembro.id){
                  miembrosService.saveMiembro(vm.miembro).then(function(data){
                    vm.miembro.id=data.id;
                    miembrosService.miembroSelected=vm.miembro;
                    vm.cancelar();
                    $rootScope.$broadcast('miembros','nuevo');
                  })
              }else{
                switch(vm.miembro.certificacion){
                    case true: vm.miembro.certificacion=1;break;
                    case false: vm.miembro.certificacion=0;break;
                }
                  miembrosService.editMiembro(vm.miembro).then(function(data){
                    miembrosService.miembroSelected=vm.miembro;
                    vm.cancelar();
                    $rootScope.$broadcast('miembros','editado');
                  })                    
              }
          }else{
              logger.warning('¡Complete todos los campos!');
          }
        }
        vm.cancelar = function(){
            vm.miembro =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            miembrosService.updates.disabled=true;
            miembrosService.updates.idSelected=undefined;
            $state.go('Admin.miembros.miembro',{id:0});
        }
        function doData(){
            return {
                matricula:'',
                ap_Paterno:'',
                ap_Materno:'',
                nombre:'',
                fecha_Nac:'',
                incorporacion:'',
                estado:'',
                vigencia:'',
                certificacion:false,
                numero:'',
                fecha_caducidad:''
            }
        }
    }   
}());