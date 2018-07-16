(function (){
	'use strict'
	angular.module('app.admin.miembros')
	.factory('miembrosService',dataService);

	function dataService ($resource,logger,$state){
		var resource = $resource('/Miembros/:id',{id:'@id'},{
			'get' : {method: 'GET'},
			'query' : {method: 'GET',isArray:true},
			'save' : {method:'POST'},
			'edit' : {method: 'PUT'},
			'remove' : {method:'DELETE'}
		})

		var service = {
			getMiembros:getMiembros,
			getMiembro:getMiembro,
			saveMiembro:saveMiembro,
			editMiembro:editMiembro,
			deleteMiembro:deleteMiembro,

			miembroSelected:undefined,
            updates:{disabled:true,idSelected:undefined}
		}

		return service;
		function getMiembros(){
			return resource.query().$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					if(error.status==404){
						logger.info('Colegiado no encontrado');
					}
					console.log(error);
				})
		}
		function getMiembro(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveMiembro(data){
			return resource.save(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					if(error.status==404){
						logger.info('Colegiado no encontrado');
					}
					console.log(error);
				})
		}
		function editMiembro(data){
			return resource.edit(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					if(error.status==404){
						logger.info('Colegiado no encontrado');
					}
					console.log(error);
				})
		}
		function deleteMiembro(data){
			return resource.remove(data).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					if(error.status==404){
						logger.info('Colegiado no encontrado');
					}
					console.log(error);
				})
		}

	}
}())

