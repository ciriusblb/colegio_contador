(function (){
	'use strict'
	angular.module('app.client.home')
	.factory('dataService',dataService);

	function dataService ($resource){
		var resource = $resource('/getHome/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true}
		})

		var service = {
			getHome:getHome
		}

		return service;

		function getHome(){
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
