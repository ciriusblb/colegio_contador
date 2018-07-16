(function (){
	'use strict'
	angular.module('app.admin.home.slider')
	.factory('A_sliderService',dataService);

	function dataService ($resource,$state,servicios){
		var resource = $resource('/A_Slider/:id',{id:'@id'},{
			'query' : {method: 'GET',isArray:true,skipAuthorization:false},
			'save' : {method: 'POST',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
			'edit' : {method: 'PUT',transformRequest:servicios.transformData,headers:{'Content-Type':undefined}},
            'remove': { method:'DELETE'}
		})
		var service ={
			getSlider:getSlider,
			getSlide:getSlide,
			saveSlide:saveSlide,
			editSlide:editSlide,
			removeSlide:removeSlide,

			slideSelected:undefined,
            updates:{disabled:true,idSelected:undefined}
		}
		return service;

		function getSlider(){
		return resource.query().$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function getSlide(){
			return resource.get($state.params).$promise
				.then(function(data){
					return data;
				})
				.catch(function(error){
					console.log(error);
				})
		}
		function saveSlide(data){
		return resource.save(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function editSlide(data){
		return resource.edit(data).$promise
			.then(function(data){
				return data;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		function removeSlide(data){
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
