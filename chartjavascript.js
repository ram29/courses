function information(){
    
    var tr= document.createElement("tr");
     var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");
    var td5= document.createElement("td");
    var td6 = document.createElement("td");
    
    var table = document.getElementById("charter");
    
    //appending rows and cells
    
    table.appendChild(tr);
    
    var name=  document.getElementById("name1").value;
    
    td1.innerHTML= name;
    
    tr.appendChild(td1);
    
    
     td2.innerHTML= document.getElementById("name2").value;
     tr.appendChild(td2);
    
    td3.innerHTML= document.getElementById("name3").value;
     tr.appendChild(td3);
    
    
    //selectoption for level
        
    var choose = document.getElementById("level");
 
    var option  = choose.options[choose.selectedIndex].text;
    td4.innerHTML= option;
    tr.appendChild(td4);
    
    //select options for courses
    
    var select = document.getElementById("courses");
    var courseslist  = select.options[select.selectedIndex].text;
    td5.innerHTML= '<a href="topics.html?courseName='+ courseslist+'">'+courseslist+'</a>' ;
    tr.appendChild(td5);
    
    // select options for cubtopics
    
    var select = document.getElementById("subtopics");
    var subtopicslist  = select.options[select.selectedIndex].text;
    td6.innerHTML= '<a href="topics.html?courseName='+ subtopicslist+'">'+subtopicslist+'</a>' ;
    
    tr.appendChild(td6);
    
    showResults();
  
       }

//show the form
//hidden form
//hide coures button

function openCourseForm(){
    
    document.getElementById("details").style.display="block";
     document.getElementById("charter").style.display="none";
     document.getElementById("hide").style.display="none";
    
}
function showResults(){
    
     document.getElementById("details").style.display="none";
     document.getElementById("charter").style.display="block";
     document.getElementById("hide").style.display="block";
    
    
}

// selcting courselist using javascript

var ui= ["html","css","javascript","angularjs","nodejs" ] 

var java = ["springs","hybernate","struts","jsp"]

var dotnet= [ "c#","dotnet","asp.net"]

var sql =["sql","oraclesql"]

function topicsList(topics){
        
    switch (topics.value){
        case "UI":
            createOptions(ui);
            break;
        case "Java":
            createOptions(java);
            break;
        case "Dotnet":
            createOptions(dotnet);
            break;
        case "SQL":
            createOptions(sql); 
            break;
            }
    function createOptions(index){
        subtopics.options.length = 0;
        for(var i=0;i<index.length;i++)
            
            {
                var select = document.createElement("option");
                select.value= index[i];
                select.text = index[i];
                subtopics.appendChild(select);
            
                }
    
    }   
}

window.onload = function(){
    var getTableData = new XMLHttpRequest();

    getTableData.onreadystatechange = function() {
        //checking for when response is received from server
        if(getTableData.readyState === 4 && getTableData.status == 200) {
            var tableInfo     = JSON.parse(getTableData.responseText);
            console.log(getTableData);
               coursesObjects(tableInfo); 
        }
    };
    
                
getTableData.open("GET", "http://localhost:10000/courses", true);
  getTableData.send();
 }

function coursesObjects(list){
    
    var newTable = document.getElementById("charter");
            
    for (var i in list){
        var obj = list[i];
       var courseid = list[i]["courseid"];
        var tr = document.createElement("tr");
    
        for(var j in obj){
            var subobj = obj[j];
            var td = document.createElement("td");
            
           if (i==="name") {
                             
            td.innerHTML=  '<a href="http://localhost:10000/courses/">'+obj[j]+'</a>';
                                               
           };
                                
            td.innerHTML = obj[j];
            tr.appendChild(td);
            
        }
        newTable.appendChild(tr);
    }
};







 
/*window.onload = function(){
    var getTableData = new XMLHttpRequest();

    getTableData.onreadystatechange = function() {
        //checking for when response is received from server
        if(getTableData.readyState === 4 && getTableData.status == 200) {
            var tableInfo     = JSON.parse(getTableData.responseText);
            console.log(getTableData);
               jsonObjects(tableInfo); 
        }
    };
    
                
getTableData.open("GET", "topics.json", true);
  getTableData.send();
 }

function jsonObjects(list){
    
    var newTable = document.getElementById("charter");
            
    for (var i in list.course){
        var obj = list.course[i];
        var tr = document.createElement("tr");
    
        for(var j in obj){
            var subobj = obj[j];
            var td = document.createElement("td");
            td.innerHTML = subobj;
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }
}*/


/*$(document).ready(function(){
    
      $.ajax({
               method: "GET",
               url: "topics.json",
               processData: "success",
               dataType: "json"
            });
        
               
    var data = $.getJSON("topics.json",function(json){
        
    console.log(json);
        
      for (var i in json.course){
        var obj = json.course[i];  
          var tr = $('<tr />');
                    
           for( var j in obj){
            var subobj = obj[j];
            var td = $('<td />');
               td.html= subobj;
               tr.append()
             }
           $("#charter").append(tr);
          
          }
      });
    });*/
 
          
        
        
   //  $.each( json, function(course, value ) {
      //   var obj = course.json(value);
       //  var tr = $.<tr/>
        //    $.each ( course)
       
             // var obj = 
      
             // $("#charter").append(value );
         // console.log(value);
              
        //$.each(data,fucntion(j,value){
             //  $()
               
                     
        
        
                
       


                
                   
                   
               
    
