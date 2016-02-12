

var mssql= require('mssql');

var express= require("express");

var app = express();


/*k
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// this is for the delete


app.delete('/courses', function (req, res) {
    var name = req.query.name;
    
     mssql.connect("mssql://belluser:rammalle@localhost/courses").then(function(){
    //query
    new mssql.Request().query("delete from  courses  where name = ('linux')" ).then(function(recordset){
            
    res.send('recordset');
    
    }).catch(function(err) {
		console.log(err.message); 
        
});
    
}).catch(function(err) {
		console.log(err.message); 
    
	});
});
    

app.listen(10000,function(){
    
    console.log("running on port 10000");
});




// this for the post

 /* app.post('/courses',function(req,res){
    var name = req.query.name;
    
    //res.end(name);
    
    mssql.connect("mssql://belluser:rammalle@localhost/courses").then(function(){
    //query
    new mssql.Request().query('insert into courses (name) values(\''+name+'\')' ).then(function(recordset){
            
    res.send('recordset');
    
    }).catch(function(err) {
		console.log(err.message); 
        
});
    
}).catch(function(err) {
		console.log("err.message"); 
    
	});
});
    

app.listen(10000,function(){
    
    console.log("running on port 10000");
});
*/

// this for inner join tables 

/*app.get('/courses/:courseid/topics',function(req,res){
            
  mssql.connect("mssql://belluser:rammalle@localhost/courses").then(function(){
    //query
    new mssql.Request().query("select b.*from course_topics a \
                            inner join topics b on a.topicsid = b.topicsid \
                            where a.courseid = "+ req.params.courseid).then(function(recordset){
            
    res.end(JSON.stringify(recordset));
    
   }).catch(function(err) {
		console.log("err.message"); 
});
    
}).catch(function(err) {
		console.log("err.message"); 
    
	});
});

app.listen(10000, function(){
    
    console.log("server running on port 10000");
});


    // this is for course_topics table 
    
app.get('/course_topics',function(req,res){
          
mssql.connect("mssql://belluser:rammalle@localhost/courses").then(function(){
    //query
    new mssql.Request().query("select * from  course_topics ").then(function(recordset){
            
    res.end(JSON.stringify(recordset));
    
   }).catch(function(err) {
		console.log("err.message"); 
});
    
}).catch(function(err) {
		console.log("err.message"); 
    
	});
});

app.listen(10000, function(){
    
    console.log("server running on port 10000");
});*/


// this is for the courses

/*app.get('/courses',function(req,res){
          
mssql.connect("mssql://belluser:rammalle@localhost/courses").then(function(){
    //query
    new mssql.Request().query("select * from  courses ").then(function(recordset){
            
    res.end(JSON.stringify(recordset));
    
   }).catch(function(err) {
		console.log("err.message"); 
});
    
}).catch(function(err) {
		console.log("err.message"); 
    
	});
});

app.listen(10000, function(){
    
    console.log("server running on port 10000");
});




/*var express= require("express");
var app = express();
app.get('/',function(req,res).{
        
        res.end("hello world");
        
        });
app.listen("9000",function(){
    console.log("Listening at 9000 ");
})




var http = require("http");
var webserver = http.createserver(function(request,response){
    
    response.writeHead(200,{"content-type":"text/plain"});
    responsse.end("hello world");
    
});
webserver.listen(9000);
console.log("running on port 9000");*/






