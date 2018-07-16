(function (){
	'use strict'
	angular.module('app.admin.home.enlaces')
	.factory('A_enlacesService',dataService);

	function dataService ($resource,servicios,$state){
		var resource = $resource('/A_Enlaces/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})
		var service ={
			getEnlaces:getEnlaces,
			getEnlace:getEnlace,
			saveEnlace:saveEnlace,
			editEnlace:editEnlace,
			removeEnlace:removeEnlace,

			enlaceSelected:undefined,
			updates:{disabled:true,idSelected:undefined}
		}
		return service;
		function getEnlaces(){
		return resource.query().$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function getEnlace(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveEnlace(data){
		return resource.save(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function editEnlace(data){
		return resource.edit(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function removeEnlace(data){
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