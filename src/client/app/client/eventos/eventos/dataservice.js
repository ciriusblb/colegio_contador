(function (){
	'use strict'
	angular.module('app.client.eventos.eventos')
	.factory('eventosService',dataService);

	function dataService ($resource){
		var resource = $resource('/Eventos/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getEventos:getEventos
		}

		return service;

		function getEventos(){
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
