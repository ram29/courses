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
/*function topicslist(subtopics){
    switch (subtopics.value){
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
    function createOptions(list){
        
//subtopics.li.length=0;
         for(var i=0;i<list.length;i++)
             {
                 var ul= document.createElement("li");
                 ul.value = list[i];
                 ul.text= list[i];
                 subtopics.appendChild(ul);
             }
    }*/
    
