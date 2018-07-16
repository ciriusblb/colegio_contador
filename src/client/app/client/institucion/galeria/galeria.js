(function(){
	'use strict';
	angular.module('app.client.institucion.galeria')
		.controller('Galeria',Galeria);
    Galeria.$inject = ['servicios','galeriaService'];
	function Galeria(servicios,galeriaService){
		var vm = this;
		vm.props=['categoria'];
		vm.request={};
		init();

		function init(){
			galeriaService.getGaleria().then(function(data){
				vm.galeria = data;
				vm.fotos=vm.galeria[vm.galeria.length-1].galerias;
			})
		}
        vm.showModal=function(src){
        	vm.src=src;
        }
	}	
}());




