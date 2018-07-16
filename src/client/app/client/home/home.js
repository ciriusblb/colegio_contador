(function(){
	angular.module('app.client.home')
		.controller('Home',Home);

	Home.$inject=['dataService','servicios','$filter'];
	function Home(dataService,servicios,$filter){
		var vm = this;
		
		init();
		function init(){
      dataService.getHome().then(function(data){
      	data.pop();
        vm.slider=data[0];
        vm.informes=data[1];           		
       	for (var i = 0; i < Object.keys(vm.informes).length; i++) {
       		vm.informes[i].fecha= $filter('date')(new Date(vm.informes[i].fecha),'d MMMM, yyyy');  
       	}
        vm.noticias=data[2];
      })
		}
		vm.showInfome=function(id){
			for (var i = 0; i < Object.keys(vm.informes).length; i++) {
     		if(id=vm.informes[i].id){
     			vm.informe=vm.informes[i];
     		}  
     	}
		}

	}
}())