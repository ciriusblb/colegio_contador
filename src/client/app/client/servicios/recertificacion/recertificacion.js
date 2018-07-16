(function(){
	'use strict';
	angular.module('app.client.servicios.recertificacion')
		.controller('Recertificacion',Recertificacion);
    Recertificacion.$inject = [];
	function Recertificacion(){
		var vm = this;
		console.log("Nuestra Recertificacion");
	}	
}());