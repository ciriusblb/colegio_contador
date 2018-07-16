(function (){
	'use strict'
	angular.module('app.client.eventos.evento')
	.factory('eventoService',dataService);

	function dataService ($resource,$state){
		var resource = $resource('/Evento/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true},
			'get' : {method: 'GET'}

		})

		var service = {
			getEvento:getEvento
		}

		return service;

		function getEvento(){
		return resource.get($state.params).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
	}
}())
