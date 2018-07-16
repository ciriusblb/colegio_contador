(function(){
	'use strict';
	angular.module('app.client.servicios.colegiatura')
		.controller('Colegiatura',Colegiatura);
    Colegiatura.$inject = [];
	function Colegiatura(){
		var vm = this;
		console.log("Nuestra Colegiatura");
	}	
}());