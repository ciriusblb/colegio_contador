(function (){
	'use strict'
	angular.module('app.admin.institucion.normasLegales')
	.factory('A_normasService',dataService);

	function dataService ($resource,servicios){
		var resource = $resource('/A_Normas_Legales/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}


		})

		var service = {
			getNormas:getNormas,
			saveNorma:saveNorma,
			editNorma:editNorma,
			removeNorma:removeNorma
		}

		return service;

		function getNormas(){
			return resource.query().$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveNorma(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})	
		}
		function editNorma(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})		
		}
		function removeNorma(data){
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
