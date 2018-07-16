(function(){
	'use strict';
	angular.module('app.client.organizacion.consejoDirectivo')
		.controller('ConsejoDirectivo',ConsejoDirectivo);
    ConsejoDirectivo.$inject = [];
	function ConsejoDirectivo(){
		var vm = this;
		console.log("Nuestra ConsejoDirectivo");
	}	
}());