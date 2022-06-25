//click on dotmenu to open
document.getElementById("dotmenu").addEventListener("click", openmenu)

//open menu function
function openmenu(){
    var x = document.getElementById("menu");
    if (x.style.display = "none") {
        x.style.display = "flex";
    }
} 

//dblclick outside menu listener
addEventListener("dblclick", close);

//close menu function
function close(){
    var x = document.getElementById("menu");
    if (x.style.display = "flex") {
        x.style.display = "none";
      }
}
