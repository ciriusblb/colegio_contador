(function(){
	'use strict';
	angular.module('app.client.servicios.certificacion')
		.controller('Certificacion',Certificacion);
    Certificacion.$inject = [];
	function Certificacion(){
		var vm = this;
		console.log("Nuestra Certificacion");
	}	
}());