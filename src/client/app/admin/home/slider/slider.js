(function(){
	'use strict';
	angular.module('app.admin.home.slider')
		.controller('A-Slider',Slider);
    Slider.$inject = ['A_sliderService','servicios','logger','$state','$rootScope'];
	function Slider(A_sliderService,servicios,logger,$state,$rootScope){
		var vm = this
        vm.slide=doData();
        vm.buttons={
            new:true
        }  
        vm.updates={};
        vm.nuevo=nuevo;  
        vm.editar=editar;  
        vm.eliminar=eliminar;
        vm.eliminarimagenes=[];
        init();
        function init(){
        	A_sliderService.getSlider().then(function(data){
        		vm.slider=data;
        		console.log(vm.slider);
        	});
        }
        vm.select = function(id){
            vm.idSelected=id;
            var i =servicios.getPosicion(id,vm.slider);
            vm.slide=JSON.parse(JSON.stringify(vm.slider[i]));
            vm.eliminarSlide={
                eliminarimagenes:[],
                eliminarId:[]
            }
            vm.eliminarSlide.eliminarimagenes.push(vm.slide.slide)
            vm.eliminarSlide.id=vm.slide.id;
            vm.buttons={edit:true,delete:true};
        }
         function nuevo(){
            vm.buttons={new:true};
            vm.updates.disabled=false;
        }
        function editar(){
            vm.updates.disabled=false;
        }
        function eliminar(){
            A_sliderService.removeSlide(vm.eliminarSlide).then(function(data){
                var i =servicios.getPosicion(vm.idSelected,vm.slider);
                vm.slider.splice(i,1);
                vm.cancelar();
            })
        }
        vm.guardar = function(form){
            if(vm.slide.slide0 || vm.slide.slide){
                vm.slideAux=JSON.parse(JSON.stringify(vm.slide));
                servicios.removeBlob(vm.slide);
                if(!vm.slide.id){
                    A_sliderService.saveSlide(vm.slide).then(function(data){
                        vm.slideAux.id=data.id;
                        vm.slideAux.slide=data.slide;
                        vm.slider.push(vm.slideAux);
                        vm.cancelar();
                    })
                }else{
                    vm.slide.eliminarimagenes=vm.eliminarimagenes;
                    A_sliderService.editSlide(vm.slide).then(function(data){
                        vm.slideAux.slide=data.slide;
                        var i =servicios.getPosicion(vm.idSelected,vm.slider);
                        vm.slider[i]=vm.slideAux;
                        vm.cancelar();
                    })                    
                }
            }else{
                logger.warning('¡Complete todos los campos!');
            }
        }
        vm.cancelar = function(){
            vm.slide =doData();
            vm.buttons={new:true};
            vm.updates.disabled=true;
            vm.eliminarimagenes=[];
        }
        function doData(){
            return {
                slideBlob:'',
            }
        }
	}	
}());

