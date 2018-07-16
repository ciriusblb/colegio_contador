(function(){
	'use strict';
	angular.module('app.client.colegiados.mienbrosColegiados')
		.controller('MienbrosColegiados',MienbrosColegiados);
    MienbrosColegiados.$inject = ['colegiadoService','servicios'];
	function MienbrosColegiados(colegiadoService,servicios){
		var vm = this;
		vm.datos=doData();
		vm.buscar=function(){
			colegiadoService.getColegiado(vm.datos).then(function(data){
				vm.colegiado=data;
				vm.datos=doData();
			})
		}
		vm.limpiar= function(){
			vm.colegiado=undefined;
		}
		function doData(){
			return {
				matricula:'',
				ap_Paterno:'',
				ap_Materno:'',
				nombre:''
			}
		}
	}	
}());