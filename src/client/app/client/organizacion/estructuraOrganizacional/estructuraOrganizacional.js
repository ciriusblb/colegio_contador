(function(){
	'use strict';
	angular.module('app.client.organizacion.estructuraOrganizacional')
		.controller('EstructuraOrganizacional',EstructuraOrganizacional);
    EstructuraOrganizacional.$inject = [];
	function EstructuraOrganizacional(){
		var vm = this;
		console.log("Nuestra EstructuraOrganizacional");
	}	
}());