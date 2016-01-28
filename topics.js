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
    function createOptions(list){
        
//subtopics.li.length=0;
         for(var i=0;i<list.length;i++)
             {
                 var ul= document.createElement("li");
                 ul.innerHTML = list[i];
                 topicslist.appendChild(ul);
             }
    }
    
}