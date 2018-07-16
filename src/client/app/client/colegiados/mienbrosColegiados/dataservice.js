(function (){
	'use strict'
	angular.module('app.client.colegiados.mienbrosColegiados')
	.factory('colegiadoService',dataService);

	function dataService ($resource,logger){
		var resource = $resource('/Colegiado/:id',{
			'get' : {method: 'GET'}
		})

		var service = {
			getColegiado:getColegiado
		}

		return service;

		function getColegiado(data){
		return resource.get(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				if(error.status==404){
					logger.info('Colegiado no encontrado');
				}
			})
		}
	}
}())

