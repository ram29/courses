function information(){
    
    var tr= document.createElement("tr");
     var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");
    var table = document.getElementById("charter");
    table.appendChild(tr);
    var name=  document.getElementById("name1").value;
    
    td1.innerHTML= '<a href="topics.html?courseName='+ name+'">'+name+'</a>';
    
    tr.appendChild(td1);
    console.log(td1);
    
     td2.innerHTML= document.getElementById("name2").value;
     tr.appendChild(td2);
    
    td3.innerHTML= document.getElementById("name3").value;
     tr.appendChild(td3);
    
    
    
    var choose = document.getElementById("level");
 
    var option  = choose.options[choose.selectedIndex].text;
    td4.innerHTML= option;
    tr.appendChild(td4);
    
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