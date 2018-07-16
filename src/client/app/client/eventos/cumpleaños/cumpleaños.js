(function(){
	'use strict';
	angular.module('app.client.eventos.cumpleaños')
		.controller('Cumpleaños',Cumpleaños);
    Cumpleaños.$inject = ['$filter','cumpleService'];
	function Cumpleaños($filter,cumpleService){
		var vm = this;
		console.log("Nuestra Cumpleaños");
		init();
		function init(){
			cumpleService.getMiembros().then(function(data){
				vm.miembros=data;
				vm.happyDay=$filter('date')(new Date(), 'd MMMM');
				vm.mes=$filter('date')(new Date(), 'MMMM');
				for (var i = 0; i < vm.miembros.length; i++) {
					vm.miembros[i].fecha_Nac=$filter('date')(new Date(vm.miembros[i].fecha_Nac), 'd MMMM');
				}
			})
		}
		vm.meses=[
			{mes:'Enero'},
			{mes:'Febrero'},
			{mes:'Marzo'},
			{mes:'Abril'},
			{mes:'Mayo'},
			{mes:'Junio'},
			{mes:'Julio'},
			{mes:'Agosto'},
			{mes:'Septiembre'},
			{mes:'Octubre'},
			{mes:'Noviembre'},
			{mes:'Diciembre'}
		];
	}	
}());


