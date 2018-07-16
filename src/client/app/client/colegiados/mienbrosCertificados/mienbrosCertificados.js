(function(){
	'use strict';
	angular.module('app.client.colegiados.mienbrosCertificados')
		.controller('MienbrosCertificados',MienbrosCertificados);
    MienbrosCertificados.$inject = ['certificadoService','servicios'];
	function MienbrosCertificados(certificadoService,servicios){
		var vm = this;
		console.log("Nuestra mienbrosCertificados");
		vm.datos=doData();
		vm.buscar=function(){
			certificadoService.getCertificado(vm.datos).then(function(data){
				vm.certificado=data;
				vm.datos=doData();
			})
		}
		vm.limpiar= function(){
			vm.certificado=undefined;
		}
		function doData(){
			return {
				matricula:'',
				ap_Paterno:'',
				ap_Materno:'',
				nombre:'',
				numero:''
			}
		}
	}	
}());