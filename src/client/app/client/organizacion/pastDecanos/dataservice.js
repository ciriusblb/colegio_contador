(function (){
	'use strict'
	angular.module('app.client.organizacion.pastDecanos')
	.factory('decanosService',dataService);

	function dataService ($resource){
		var resource = $resource('/Decanos/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getDecanos:getDecanos
		}

		return service;

		function getDecanos(){
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
