(function() {
    'use strict';

    angular
        .module('app.client')
        .factory('clientService', dataService);

    /* @ngInject */
    function dataService($resource) {
        var resource = $resource('/layout/:id',{id:'@id'}, { 
            'get':    {method:'GET'},
            'query': { method: 'GET',isArray:true},
            'update': { method: 'PUT'},
            'save': { method: 'POST'},
            'remove': { method:'DELETE'}
        });

        var service = {
            getEnlaces:getEnlaces
        }

        return service;

        function getEnlaces(){
        return resource.query().$promise
            .then(function(data){
                return data;
            })
            .catch(function(error){
                console.log(error);
            })
        }


    }
})();

