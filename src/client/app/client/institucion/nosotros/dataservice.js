(function (){
	'use strict'
	angular.module('app.client.institucion.nosotros')
	.factory('nosotrosService',dataService);

	function dataService ($resource){
		var resource = $resource('/Nosotros/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getNosotros:getNosotros
		}

		return service;

		function getNosotros(){
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
