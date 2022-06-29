// open settings
document.getElementById("opensettings").addEventListener("click", opensettings)

function opensettings(){
    var x = document.getElementById("settings");
    if (x.style.display = "none") {
        x.style.display = "block";
    }
}

// close settings
document.getElementById("closesettings").addEventListener("click", closesettings)

function closesettings(){
    var x = document.getElementById("settings")
    if (x.style.display = "block") {
        x.style.display = "none"
    }
}
