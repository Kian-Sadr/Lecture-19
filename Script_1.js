//Collecting elements for easier reading later
var output = document.getElementById("output");
var entry_name = document.getElementById("entry_name");
var year = document.getElementById("year");

entry_name.addEventListener("change", function(){
  localStorage.setItem("name", entry_name.value);
});

year.addEventListener("change", function(){
  sessionStorage.setItem("year", year.value);
});

document.addEventListener("DOMContentLoaded", function(){
  entry_name.value = localStorage.getItem("name");
  let savedYear = sessionStorage.getItem("year");
  if(savedYear != null)
    year.value = savedYear;
  
});

function name_reset(){
  localStorage.removeItem("name");
  entry_name.value="";
}

function year_reset(){
  sessionStorage.clear();
  year.value = null;
}







