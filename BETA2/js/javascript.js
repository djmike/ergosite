// show / hide id

function showhide (id)  {
var style = document.getElementById(id).style  
if (style.display == "none")  
  style.display = "";  
else  
  style.display = "none";  
}

function hide (id)  {
var style = document.getElementById(id).style  
style.display = "none";  
}

function show (id)  {
var style = document.getElementById(id).style  
style.display = "block";  
}
