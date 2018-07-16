(function(){
	'use strict';
	angular.module('app.data')
		.factory('servicios',servicios);

	function servicios(logger,$q,$filter){
		var service = {
            removeBlob:removeBlob,
            getPosicion:getPosicion,
            doIntervalDate:doIntervalDate,
            getArrayOfAddImg:getArrayOfAddImg,
            doNewArrays:doNewArrays,
            doNewArray:doNewArray,
            mainFilter:mainFilter,
            secondaryFilter:secondaryFilter,
            verifyFilters:verifyFilters,
            checkExtension:checkExtension,
            textToArray:textToArray,
            transformData:transformData
        };
		return service;
        function getPosicion(id,array){
          for (var i = 0; i < array.length; i++) {
            if(array[i].id==id) return i;
          }
          return undefined;
        }
        function removeBlob(data){
            for(var properity in data){
                if(properity.substr(properity.length-4)=='Blob'){
                    delete data[properity];
                }
            }
        }
        function doIntervalDate(date,format){
                var mandato={};
                mandato.inicio=$filter('date')(date.inicio, format);
                mandato.fin=$filter('date')(date.fin, format);
                return mandato.inicio+' - '+mandato.fin;
        }
        function getArrayOfAddImg(data){
          var names=[];
          for(var properity in data){
            var lastItem=data[properity].length-1;
            var number=data[properity][lastItem][properity].replace(/\D/g,'');
            names.push(properity+'-'+number.slice(0,-3)+'-'+parseInt(number.substr(-3)))
          }
          return names;
        }
        function doNewArrays(originalArray,props){
            var newArray=[];
            for (var i = 0; i < props.length; i++) {
                newArray[i]=doNewArray(originalArray,props[i]);
            }
            return newArray;
        } 
        function doNewArray(originalArray, prop){
            var newArray = [];
            var lookupObject  = {};
            var array=[];
            for(var i in originalArray) {
                if(!isNaN(i)){
                    lookupObject[originalArray[i][prop]] = originalArray[i];
                }                   
            }
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
            for (var i = 0; i < newArray.length; i++) {
                array.push({[prop]:newArray[i][prop],selected:false});
            }
            return array;
        }
        function mainFilter(array,request){
            if(Object.keys(request).length!=0){
                var items=[];
                for (var i = 0; i < array.length; i++) {
                    var insert =false;
                    for( var key in request){
                        if(array[i][key]==request[key]){
                            insert=true;
                        }else{
                            insert=false;
                            break;
                        }
                    }
                    if(insert){
                        items.push(array[i]);
                    }
                }
                return items;
            }else{
                return array;
            } 
        }
        function secondaryFilter(originalArray,request,filters,props){
            var array=mainFilter(originalArray,request);
            var arrayAux= array;
            for (var i = 0; i < filters.length; i++){
                for (var j = 0; j < filters[i].length; j++) {
                    if(filters[i][j].selected){
                        arrayAux = searchByProp(arrayAux,filters[i][j][props[i]],props[i]);
                    }
                }
            }
            array=arrayAux;
            return array;
        }
        function verifyFilters(array,filters,props,ind){
            for (var i = 0; i < props.length; i++) {
                if(i!=ind){
                    var aux = doNewArray(array,props[i]);
                    for (var j = 0; j < filters[i].length; j++) {
                        for (var o = 0; o < aux.length ;o++) {
                            if(filters[i][j][props[i]]===aux[o][props[i]]){
                                filters[i][j].selected=false;
                                break;
                            }else{
                                filters[i][j].selected=true;
                            }
                        }
                    }
                    
                }
            }
            return filters;
        }
        function checkExtension(name){
            var extension= name.split('.');
            var aux = extension[extension.length-1];
            var extensions = {
                imagen:["jpg","jpeg","png"],
                documento:["doc","docm","docx","dot","dotm","dotx","pdf"]
            };
            for (var key in extensions) {
                if(in_array(aux,extensions[key],key)){
                    return in_array(aux,extensions[key],key);
                    break;
                }
            }
        }
        function in_array(needle,array,key){
            for (var i = 0; i < array.length; i++) {
                if(array[i]==needle.toLowerCase()){
                    return array[i];
                }
            }
        }

        function textToArray(description){
            var texto=[];
            var stringd =  description.replace(/(\r\n|\n|\r)/gm,'---');
            stringd = stringd.split('---');
            for (var j = 0; j < stringd.length; j++) {
                texto.push({text:stringd[j]});
            }
            return texto
        }

        function transformData(data) {
            if(undefined === data) return data;
            var formData = new FormData();
            angular.forEach(data, function(value, key) {
              if(value instanceof FileList) {
                if(value.length === 1)
                  formData.append(key, value[0]);
                else {
                  angular.foreach(value, function(file, index) {
                    formData.append(key + '_' + index, file);
                  });
                }
              } else {
                formData.append(key, value);
              }
            });
            return formData;
        } 
        function searchByProp(items,word,prop){
            return items.filter(function(item){
                return item[prop] != word;
            });
        } 
	}

}());