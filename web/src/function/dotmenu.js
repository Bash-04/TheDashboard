document.getElementById("dotmenu").addEventListener("click", openmenu)

function openmenu(){
    var x = document.getElementById("menu");
    if (x.style.display = "none") {
        x.style.display = "flex";
    }
} 

//click outside menu listener
addEventListener("dblclick", close);

//close menu
function close(){
    var x = document.getElementById("menu");
    if (x.style.display = "flex") {
        x.style.display = "none";
      }
}
