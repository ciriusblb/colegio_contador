(function(){
	'use strict';
	angular.module('app.client.eventos.evento')
		.controller('Evento',Evento);
    Evento.$inject = ['eventoService'];
	function Evento(eventoService){
		var vm = this;
		console.log("Nuestra Evento");
		init();
		function init(){
			eventoService.getEvento().then(function(data){
				vm.evento=data;
				vm.evento.fecha= new Date(vm.evento.fecha);
			})
		}
	}	
}());