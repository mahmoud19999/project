var nameinput=document.getElementById("name");
var websiteinput=document.getElementById("website");
var buttoninput=document.getElementById("button");
var containers=[];

if(JSON.parse(localStorage.getItem("mahmoud"))==null)    
    {
       var containers=[];                             
    }
else                                                     
                                                                          
    {                                                                      
       var containers =JSON.parse(localStorage.getItem("mahmoud"));
       displaylinks()
    }

buttoninput.onclick=function()
{
   addlinks();
    displaylinks();
}

function addlinks()
{
    var links=
        {
            names: nameinput.value,
            webssites: websiteinput.value,
        }
    containers.push(links);
    displaylinks();
    localStorage.setItem("mahmoud",JSON.stringify(containers));
}
function displaylinks()
{
    var trs="";
    for(var i=0; i<containers.length;i++)
    {
    trs+='<tr><td>'+containers[i].names+'</td><td></td><td><a class="btn btn-primary" href='+containers[i].webssites+'>Visit</a><button onclick="Deletelink('+i+')" class="btn btn-danger">Delete</button></td></tr>';
        
    }
    document.getElementById("tablebody").innerHTML=trs;
}

function Deletelink(houda)
{
    containers.splice(houda,1);
    displaylinks();
}