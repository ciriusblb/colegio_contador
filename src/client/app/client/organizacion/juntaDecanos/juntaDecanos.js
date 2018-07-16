(function(){
	'use strict';
	angular.module('app.client.organizacion.juntaDecanos')
		.controller('JuntaDecanos',JuntaDecanos);
    JuntaDecanos.$inject = [];
	function JuntaDecanos(){
		var vm = this;
		console.log("Nuestra JuntaDecanos");
	}	
}());