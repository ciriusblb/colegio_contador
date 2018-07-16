(function (){
	'use strict'
	angular.module('app.client.eventos.cumpleaños')
	.factory('cumpleService',dataService);

	function dataService ($resource,$state){
		var resource = $resource('/Cumple/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true},
		})

		var service = {
			getMiembros:getMiembros
		}

		return service;

		function getMiembros(){
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
