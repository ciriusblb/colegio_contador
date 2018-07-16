(function(){
	'use strict';
	angular.module('app.client.institucion.normasLegales')
		.controller('NormasLegales',NormasLegales);
    NormasLegales.$inject = ['normasService'];
	function NormasLegales(normasService){
		var vm = this;
		init();
		function init(){
			normasService.getNormas().then(function(data){
				vm.normas=data;
				vm.urlPdf=vm.normas[0];
			})
		}
		vm.select=function(idx){
			vm.urlPdf=vm.normas[idx];
		}

	}	
}());
