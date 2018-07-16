(function(){
	'use strict';
	angular.module('app.client.organizacion.elecciones')
		.controller('Elecciones',Elecciones);
    Elecciones.$inject = [];
	function Elecciones(){
		var vm = this;
		console.log("Nuestra Elecciones");
	}	
}());