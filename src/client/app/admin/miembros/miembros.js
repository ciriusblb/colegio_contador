(function(){
	'use strict';
	angular.module('app.admin.miembros')
		.controller('A-Miembros',Miembros);
    Miembros.$inject = ['miembrosService','servicios','$state','$rootScope','logger'];
	function Miembros(miembrosService,servicios,$state,$rootScope,logger){
		var vm = this;

        vm.selected=[{selected:true},{selected:true}];
        vm.request={};
        vm.estados=[{estado:'HABIL',selected:false},{estado:'INHABIL',selected:false}];
        vm.tipos=[{tipo:'certificado',selected:false},{tipo:'colegiado',selected:false}];


		init();
        $state.go('Admin.miembros.miembro',{id:0});
        vm.updates=miembrosService.updates;

        $rootScope.$on('miembros',function(event, action){
            if(miembrosService.miembroSelected){
                var i = servicios.getPosicion(miembrosService.miembroSelected.id,vm.miembros);
                switch(action){
                    case 'nuevo': vm.miembros.push(miembrosService.miembroSelected);break;
                    case 'editado': vm.miembros[i]=miembrosService.miembroSelected;break;
                    case 'eliminado': vm.miembros.splice(i,1);break;
                }

                reinit();
                miembrosService.miembroSelected=undefined;
                logger.success('Colegiado '+action+'!');
            }
        });
		function init(){
			miembrosService.getMiembros().then(function(data){
				vm.miembros=data;
				vm.items=vm.miembros;
			});
		}
		vm.ver=function(id){ 
            if(vm.updates.disabled){
                vm.updates=miembrosService.updates={idSelected:id,disabled:true};
                $state.go('Admin.miembros.miembro',{id:id});
            }
		}
        vm.filtro=function(array,idx,ind,prop,word){
            vm.request[prop]=word;
            vm.selected[ind].selected=false;
            array.filter(function(item){ 
              item.selected=false;
            });
            array[idx].selected=true;
            vm.items=servicios.mainFilter(vm.miembros,vm.request);
            return vm.items;
        }
        vm.reset= function(array,i,prop){
            delete vm.request[prop];
            array.filter(function(item){ 
              item.selected=false;
            });
            vm.items=servicios.mainFilter(vm.miembros,vm.request);
            return vm.items;
        }
        function reinit(){
            vm.items=servicios.mainFilter(vm.miembros,vm.request);
            vm.updates=miembrosService.updates;
            vm.items= vm.items.length === 0 ? vm.miembros:vm.items;
        }
	}	
}());