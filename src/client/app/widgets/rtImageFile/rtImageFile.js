(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('rtImageFile', rtImageFile);
    function rtImageFile ($timeout) {
        var directive = {
            scope: {
                dato:'=',
                files:'=',
                eliminar:'=',
                property:'=',
                identifier:'=',

                heightUpload:'=',
                widthUpload:'=',
                heightUploaded:'=',
                widthUploaded:'=',

                blob:'=',
                eraseFile:'=',
                eliminarDato:'&',

                names:'=',

                type:'='
            },
            templateUrl: 'app/widgets/rtImageFile/rtImageFile.html',
            restrict: 'E',
            controller:function($scope){ 
                $scope.fileReaderSupported = window.FileReader != null;
                $scope.photoChanged = function(files){
                    if (files != null) {
                        if($scope.dato[$scope.property.split('0')[0]] && typeof($scope.dato[$scope.property.split('0')[0]])=='string'){
                            $scope.eliminar.push($scope.dato[$scope.property.split('0')[0]]);
                            $scope.dato['re'+$scope.property]=$scope.dato[$scope.property.split('0')[0]];
                        }
                        $scope.dato[$scope.property]=files[0];
                        if ($scope.fileReaderSupported) {
                            $timeout(function() {
                                var fileReader = new FileReader();
                                fileReader.readAsDataURL(files[0]);
                                fileReader.onload = function(e) {
                                    $timeout(function(){
                                        $scope.blob = e.target.result;
                                    });
                                }
                            });
                        }
                    }
                };

                $scope.fileChanged = function(files){
                    if (files != null) {
                        if($scope.dato[$scope.property.split('0')[0]] && typeof($scope.dato[$scope.property.split('0')[0]])=='string'){
                            $scope.eliminar.push($scope.dato[$scope.property.split('0')[0]]);
                            $scope.dato['re'+$scope.property]=$scope.dato[$scope.property.split('0')[0]];
                        }
                        $scope.dato[$scope.property]=files[0];

                        if($scope.dato[$scope.property].type.split('/')[1]==='pdf'){
                            $scope.blob='pdf';
                        }else{
                            $scope.blob='word';
                        }
                        $scope.dato[$scope.names]=$scope.dato[$scope.property].name;
                    }
                };

            }
        };
        return directive;
    }
})();
