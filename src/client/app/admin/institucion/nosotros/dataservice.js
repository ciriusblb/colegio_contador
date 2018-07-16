(function (){
	'use strict'
	angular.module('app.admin.institucion.nosotros')
	.factory('A_nosotrosService',dataService);

	function dataService ($resource){
		var resource = $resource('/A_Nosotros/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true},
			'save' : {method: 'POST'},
			'edit' : {method: 'PUT'},
            'remove': { method:'DELETE'}
		})

		var service = {
			getNosotros:getNosotros,
			saveNosotro:saveNosotro,
			editNosotro:editNosotro,
			removeNosotro:removeNosotro
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
		function saveNosotro(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}	
		function editNosotro(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}	
		function removeNosotro(data){
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
