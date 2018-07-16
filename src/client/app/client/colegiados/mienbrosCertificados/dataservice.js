(function (){
	'use strict'
	angular.module('app.client.colegiados.mienbrosCertificados')
	.factory('certificadoService',dataService);

	function dataService ($resource,logger){
		var resource = $resource('/Certificado/:id',{
			'get' : {method: 'GET'}
		})

		var service = {
			getCertificado:getCertificado
		}

		return service;

		function getCertificado(data){
		return resource.get(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				if(error.status==404){
					logger.info('Certificado no encontrado');
				}
				console.log(error);
			})
		}
	}
}())

