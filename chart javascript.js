function information(){
    
    var tr= document.createElement("tr");
     var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");
    var table= document.createElement("table");
    table.appendChild(tr);
    
    td1.innerHTML= document.getElementById("name").value;
    tr.appendChild(td1);
    
   }

