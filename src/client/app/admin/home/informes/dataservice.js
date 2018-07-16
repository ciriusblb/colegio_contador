(function (){
	'use strict'
	angular.module('app.admin.home.informes')
	.factory('A_InformeService',dataService);

	function dataService ($resource,servicios){
		var resource = $resource('/A_Informes/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})
		var service = {
			getInformes:getInformes,
			saveInforme:saveInforme,
			editInforme:editInforme,
			removeInforme:removeInforme
		}

		return service;

		function getInformes(){
			return resource.query().$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveInforme(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})	
		}
		function editInforme(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})		
		}
		function removeInforme(data){
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