(function(){
	'use strict';
	angular.module('app.client.eventos.seminarios')
		.controller('Seminarios',Seminarios);
    Seminarios.$inject = [];
	function Seminarios(){
		var vm = this;
		console.log("Nuestra Seminarios");
	}	
}());