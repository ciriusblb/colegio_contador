(function(){
	'use strict';
	angular.module('admin.servicios.recertificacion')
		.controller('Recertificacion',Recertificacion);
    Recertificacion.$inject = [];
	function Recertificacion(){
		var vm = this;
		console.log("Nuestra Recertificacion");
	}	
}());