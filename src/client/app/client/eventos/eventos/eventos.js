(function(){
	'use strict';
	angular.module('app.client.eventos.eventos')
		.controller('Eventos',Eventos);
    Eventos.$inject = ['eventosService'];
	function Eventos(eventosService){
		var vm = this;
		init();
		function init(){
			eventosService.getEventos().then(function(data){
				vm.eventos=data;
				for (var i = 0; i < vm.eventos.length; i++) {
					vm.eventos[i].fecha = new Date(vm.eventos[i].fecha);
				}
			})
		}
	}	
}());