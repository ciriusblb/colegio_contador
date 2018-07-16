var fs= require('fs-extra');
var upload={
	getSetImage : function (req,callback){
		for (var properity in req.files) {
			if(req.files){
				var extension = req.files[properity].name.split('.');
				var request = {
					carpeta:properity.slice(0,-1),
					extension:extension[extension.length-1],
					fileId:req.body.id_img+1,
					aux:properity.substr(-1)
				}
				var name =createNameImg(request);
				var categoria = checkExtension(name);
				switch(categoria){
					case 'imagen': fs.copy(req.files[properity].path,'src/server/public/imagenes/'+properity.slice(0,-1)+'/'+name); break;
					case 'documento' :fs.copy(req.files[properity].path,'src/server/public/archivos/'+properity.slice(0,-1)+'/'+name);break;
				}
				req.body[properity]=name;
			}
		}
		callback(null,req.body);
	},




	getEditImage : function(req,callback){
		var agregarimagenes=[];
		if(req.body.agregarimagenes){
			agregarimagenes = req.body.agregarimagenes.split(',');
		}
		var contimagenes={};
		for (var i = 0; i < agregarimagenes.length; i++) {
			var parts = agregarimagenes[i].split('-');
			contimagenes[parts[0]]={fileId:parts[2],aux:parts[1]};
		}
		for (var properity in req.files) {
			if(req.files){
				var extension = req.files[properity].name.split('.');
				var name='';
				var categoria='';
				if(req.body['re'+properity]){
					var prename=req.body['re'+properity].split('.');
					name=prename[0]+'.'+extension[extension.length-1];
					categoria = checkExtension(name);
				}else{
					var request = {
						carpeta:properity.slice(0,-1),
						extension:extension[extension.length-1],
						fileId:contimagenes[properity.slice(0,-1)].fileId,
						aux:parseInt(contimagenes[properity.slice(0,-1)].aux)+1
					}
					contimagenes[properity.slice(0,-1)].aux++;
					name =createNameImg(request);
					categoria = checkExtension(name);
				}
				console.log('categoria ',categoria,' name ',name);
				switch(categoria){
					case 'imagen': fs.copy(req.files[properity].path,'src/server/public/imagenes/'+properity.slice(0,-1)+'/'+name); break;
					case 'documento' :fs.copy(req.files[properity].path,'src/server/public/archivos/'+properity.slice(0,-1)+'/'+name);break;
				}
				if(req.body[properity.slice(0,-1)]){
					req.body[properity.slice(0,-1)]=name;
				}else{
					req.body[properity]=name;
				}
			}
		}		
		callback(null,req.body);
	},


	
	removeImage : function(data,callback){
		var eliminados=data.split(',');
		for (var i = 0; i < eliminados.length; i++) {
			categoria = checkExtension(eliminados[i]);
			switch(categoria){
				case 'imagen': fs.removeSync('src/server/public/imagenes/'+eliminados[i].split('.')[0].slice(0,-4)+'/'+eliminados[i]); break;
				case 'documento' :fs.removeSync('src/server/public/archivos/'+eliminados[i].split('.')[0].slice(0,-4)+'/'+eliminados[i]);break;
			}
		}
		callback(null,null);
	},
};
module.exports = upload;


function createNameImg(data){
	console.log('createNameImg ',data);
	var nombre="";
	var cadena='';
	var subCadena="";
	if(data.fileId){
	    cadena = data.fileId;
	    subCadena = String(cadena);
	    while(subCadena.length<3){
	    subCadena='0'+subCadena;
	    }
	    nombre=data.carpeta+data.aux+subCadena+'.'+data.extension;
	}else{
	    nombre=data.carpeta+'0001.'+data.extension;
	}
	return nombre;
}


function checkExtension(name)
{
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
function in_array(needle,array,key)
{
    for (var i = 0; i < array.length; i++) {
    	if(array[i]==needle.toLowerCase()){
    		return key;
    	}
    }
}