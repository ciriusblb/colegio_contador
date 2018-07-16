(function (){
	'use strict'
	angular.module('app.admin.organizacion.pastDecanos')
	.factory('A_decanosService',dataService);

	function dataService ($resource,servicios){
		var resource = $resource('/A_Decanos/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})

		var service = {
			getDecanos:getDecanos,
			saveDecano:saveDecano,
			editDecano:editDecano,
			deleteDecano:deleteDecano
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
		function saveDecano(data){
			return resource.save(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function editDecano(data){
			return resource.edit(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function deleteDecano(data){
			return resource.remove(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}



	}
}())
