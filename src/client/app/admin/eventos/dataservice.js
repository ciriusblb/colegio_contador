(function (){
	'use strict'
	angular.module('app.admin.eventos')
	.factory('A_eventosService',dataService);

	function dataService ($resource,servicios,$state){
		var resource = $resource('/A_Eventos/:id',{id:'@id'},{
			'get' : {method: 'GET'},
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})

		var service = {
			getEventos:getEventos,
			getEvento:getEvento,
			saveEvento:saveEvento,
			editEvento:editEvento,
			deleteEvento:deleteEvento,

			eventoSelected:undefined,
            updates:{disabled:true,idSelected:undefined}
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
		function getEvento(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveEvento(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function editEvento(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function deleteEvento(data){
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
