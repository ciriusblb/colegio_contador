(function(){
	'use strict';
	angular.module('app.client.institucion.nosotros')
		.controller('Nosotros',Nosotros);
    Nosotros.$inject = ['nosotrosService','servicios'];
	function Nosotros(nosotrosService,servicios){
		var vm = this;
		init();
		function init(){
			nosotrosService.getNosotros().then(function(data){
				vm.nosotros=data;
				for (var i = 0; i < vm.nosotros.length; i++) {
                    vm.nosotros[i].texto=servicios.textToArray(vm.nosotros[i].descripcion);
                }
			})
		}
	}	
}());