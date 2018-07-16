(function (){
	'use strict'
	angular.module('app.client.institucion.normasLegales')
	.factory('normasService',dataService);

	function dataService ($resource){
		var resource = $resource('/Normas_Legales/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getNormas:getNormas
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
	}
}())
