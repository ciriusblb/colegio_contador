(function (){
	'use strict'
	angular.module('app.admin.institucion.galeria')
	.factory('A_GaleriaService',dataService);

	function dataService ($resource,servicios,$state){
		var resource = $resource('/A_Galeria/:id',{id:'@id'},{
			'get' : {method: 'GET'},
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})

		var service = {
			getGaleria:getGaleria,
			getCategoria:getCategoria,
			saveCategoria:saveCategoria,
			editCategoria:editCategoria,
			deleteCategoria:deleteCategoria,

			categoriaSelected:undefined,
            updates:{disabled:true,idSelected:undefined}
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
		function getCategoria(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveCategoria(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function editCategoria(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function deleteCategoria(data){
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

