const dot = document.getElementsByClassName("dotmenu");
const menu = document.getElementsByClassName("menu");

addEventListener("click", displ);

function displ(){
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
