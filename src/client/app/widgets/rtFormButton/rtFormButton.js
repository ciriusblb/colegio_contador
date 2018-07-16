(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rtFormButton', rtFormButton);
    function rtFormButton () {
        var directive = {
            scope: {
                buttons: '=',
                updates:'=',
                newButton:'&',
                editButton:'&',
                deleteButton:'&'
            },
            templateUrl: 'app/widgets/rtFormButton/rtFormButton.html',
            restrict: 'E',
            controller:function($scope){
                $scope.updates={
                    obj:{},
                    idSelected:undefined,
                    disabled:true
                } 
            }
        };
        return directive;
    }
})();
