(function(){
	'use strict';
	angular.module('admin.servicios.colegiatura')
		.controller('Colegiatura',Colegiatura);
    Colegiatura.$inject = [];
	function Colegiatura(){
		var vm = this;
		console.log("Nuestra Colegiatura");
	}	
}());