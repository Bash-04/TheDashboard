const dot = document.getElementsByClassName("dotmenu");
const menu = document.getElementsByClassName("menu");

addEventListener("click", displ);

function displ(){
    if (menu.style.display = "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
