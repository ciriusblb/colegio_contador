(function (){
	'use strict'
	angular.module('app.admin.home.noticias')
	.factory('A_noticiasService',dataService);

	function dataService ($resource,servicios,$state){
		var resource = $resource('/A_Noticias/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})
		var service ={
			getNoticias:getNoticias,
			getNoticia:getNoticia,
			saveNoticia:saveNoticia,
			editNoticia:editNoticia,
			removeNoticia:removeNoticia,

			
			noticiaSelected:undefined,
            updates:{disabled:true,idSelected:undefined}
		}
		return service;

		function getNoticias(){
		return resource.query().$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function getNoticia(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveNoticia(data){
		return resource.save(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function editNoticia(data){
		return resource.edit(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function removeNoticia(data){
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
