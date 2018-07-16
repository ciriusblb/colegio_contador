(function(){
	'use strict';
	angular.module('app.client.organizacion.pastDecanos')
		.controller('PastDecanos',PastDecanos);
    PastDecanos.$inject = ['decanosService'];
	function PastDecanos(decanosService){
		var vm = this;
		console.log("Nuestra PastDecanos");
		init();

		function init(){
			decanosService.getDecanos().then(function(data){
				vm.decanos= data;
			})
		}
	}	
}());