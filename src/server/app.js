
var express= require("express");
var http=require('http');
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser"); 
var formidable= require('express-form-data');


//client
var getHome = require('./apps/routers/home');
var getSidebar = require('./apps/routers/sidebar');
var institucion = require('./apps/routers/institucion');
var organizacion = require('./apps/routers/organizacion');
var eventos = require('./apps/routers/eventos');
var colegiados = require('./apps/routers/colegiados');


//login
// var login = require('./login/routers/login');
var login = require('./apps/routers/login/login')





//configuration
app.use(morgan('dev'));//hace un lof de cada requeste al terminal
app.use(bodyParser({limit: '100mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(formidable.parse({keepExtensions:true}));
app.use(bodyParser.json());//parse application/json



app.use('/',getHome);
app.use('/',getSidebar);
app.use('/',institucion);
app.use('/',organizacion);
app.use('/',eventos);
app.use('/',colegiados);



app.use('/',login);




app.use('/', express.static('./src/server/public'));
app.use('/', express.static('./src/client'));
// app.use('/login', express.static('./src/login'));
// app.use('/admin', express.static('./src/admin'));


	



app.get('*',function(req,res){
		res.sendfile('./src/client/index.html');
	});
// app.get('/', function (req, res) {
//   res.sendfile('./src/client/client.html');
// });
// app.get('/login', function (req, res) {
//   res.sendfile('./src/login/login.html');
// });
// app.get('/admin', function (req, res) {
//   res.sendfile('./src/admin/admin.html');
// });



app.listen(8000);
console.log("app listening on port 8000");
