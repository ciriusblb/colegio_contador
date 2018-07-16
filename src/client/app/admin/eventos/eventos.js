(function(){
	'use strict';
	angular.module('app.admin.eventos')
		.controller('A-Eventos',Eventos);
    Eventos.$inject = ['A_eventosService','logger','servicios','$state','$rootScope'];
	function Eventos(A_eventosService,logger,servicios,$state,$rootScope){
		var vm = this;

        var monthsName=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

        vm.selected=[{selected:true}];
        vm.props=['mes'];
        vm.request={};

        init();
        $state.go('Admin.eventos.evento',{id:0});
        vm.updates=A_eventosService.updates;


        $rootScope.$on('eventos',function(event, action){
            if(A_eventosService.eventoSelected){
                var i = servicios.getPosicion(A_eventosService.eventoSelected.id,vm.eventos);
                switch(action){
                    case 'nuevo': vm.eventos.push(A_eventosService.eventoSelected);break;
                    case 'editado': vm.eventos[i]=A_eventosService.eventoSelected;break;
                    case 'eliminado': vm.eventos.splice(i,1);break;
                }

                reinit();
                A_eventosService.eventoSelected=undefined;
                logger.success('Evento '+action+'!');
            }
        });

        function init(){
            A_eventosService.getEventos().then(function(data){
                vm.eventos=data;
                console.log(vm.eventos);
                for (var i = 0; i < vm.eventos.length; i++) {
                    vm.eventos[i].fecha=new Date(vm.eventos[i].fecha);
                    vm.eventos[i].anio=vm.eventos[i].fecha.getFullYear();
                    vm.eventos[i].mes=monthsName[vm.eventos[i].fecha.getMonth()];
                }
                vm.items=vm.eventos;

                vm.anios=servicios.doNewArray(vm.items,'anio');
                vm.tofilter=servicios.doNewArrays(vm.items,vm.props);
            })
        }
        vm.select = function(id){
            if(A_eventosService.updates.disabled){
                vm.updates=A_eventosService.updates={idSelected:id,disabled:true};
                $state.go('Admin.eventos.evento',{id:id});
            }
        }
        vm.filtro=function(array,idx,ind,prop,word){
            vm.request[prop]=word;
            vm.selected[ind].selected=false;
            array.filter(function(item){ 
              item.selected=false;
            });
            array[idx].selected=true;
            vm.items=servicios.mainFilter(vm.eventos,vm.request);
            vm.tofilter=servicios.doNewArrays(vm.items,vm.props);
            return vm.items;
        }
        vm.filtro2 = function(idx,i){
            vm.ind=i;
            vm.tofilter[i][idx].selected=!vm.tofilter[i][idx].selected;
            vm.items=servicios.secondaryFilter(vm.eventos,vm.request,vm.tofilter,vm.props);
            vm.tofilter=servicios.verifyFilters(vm.items,vm.tofilter,vm.props,i);
            return vm.items;
        }
        vm.reset= function(array,i,prop){
            delete vm.request[prop];
            array.filter(function(item){ 
              item.selected=false;
            });
            vm.items=servicios.mainFilter(vm.eventos,vm.request);
            vm.tofilter=servicios.doNewArrays(vm.items,vm.props);
            return vm.items;
        }
        function reinit(){
            vm.anios=servicios.doNewArray(vm.eventos,'anio');
            for (var i = 0; i < vm.anios.length; i++) {
                if(vm.anios[i].anio==vm.request.anio){
                    vm.anios[i].selected=true;
                }
            }
            vm.items=servicios.secondaryFilter(vm.eventos,vm.request,vm.tofilter,vm.props);
            vm.tofilter=servicios.doNewArrays(vm.eventos,vm.props);
            vm.tofilter=servicios.verifyFilters(vm.items,vm.tofilter,vm.props,-1);
            vm.updates=A_eventosService.updates;
            vm.selected[0].selected= vm.items.length === 0 ? true:false;
            vm.items= vm.items.length === 0 ? vm.eventos:vm.items;

        }
	}	
}());