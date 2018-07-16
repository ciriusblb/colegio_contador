(function (){
	'use strict'
	angular.module('app.client.institucion.galeria')
	.factory('galeriaService',dataService);

	function dataService ($resource){
		var resource = $resource('/Galeria/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getGaleria:getGaleria
		}

		return service;

		function getGaleria(){
		return resource.query().$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
	}
}())
