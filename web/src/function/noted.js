// open
document.getElementById("notedopen").addEventListener("click", opennoted)

function opennoted(){
    var x = document.getElementById("noted");
    if (x.style.display = "none") {
        x.style.display = "block";
    }
}

//close
document.getElementById("notedclose").addEventListener("click", closenoted)

function closenoted(){
    var x = document.getElementById("noted")
    if (x.style.display = "block") {
        x.style.display = "none"
    }
}
