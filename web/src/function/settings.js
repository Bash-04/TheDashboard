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
        x.style.display = "none";
    }
}



// setting display
    //addEventListener click
    document.getElementById("open-background-changer").addEventListener("click", openbackgroundchanger)
    document.getElementById("open-appearancetwo").addEventListener("click", openappearancetwo)
    document.getElementById("open-appearancethree").addEventListener("click", openappearancethree)
    document.getElementById("open-reset-settings").addEventListener("click", openresetsettings)
    document.getElementById("open-dev").addEventListener("click", opendev)

        //background-changer
        function openbackgroundchanger(){
            var bc = document.getElementById("background-changer")
            var at = document.getElementById("appearancetwo")
            var ath = document.getElementById("appearancethree")
            var rs = document.getElementById("reset-settings")
            var dev = document.getElementById("dev")

            if (bc.style.display = "none") {
                bc.style.display = "block";
            }
            if (at.style.display = "block") {
                at.style.display = "none";
            }
            if (ath.style.display = "block") {
                ath.style.display = "none";
            }
            if (rs.style.display = "block") {
                rs.style.display = "none";
            }
            if (dev.style.display = "block") {
                dev.style.display = "none";
            }
        }

        //appearance 2
        function openappearancetwo(){
            var bc = document.getElementById("background-changer")
            var at = document.getElementById("appearancetwo")
            var ath = document.getElementById("appearancethree")
            var rs = document.getElementById("reset-settings")
            var dev = document.getElementById("dev")
            
            if (bc.style.display = "block") {
                bc.style.display = "none";
            }
            if (at.style.display = "none") {
                at.style.display = "block";
            }
            if (ath.style.display = "block") {
                ath.style.display = "none";
            }
            if (rs.style.display = "block") {
                rs.style.display = "none";
            }
            if (dev.style.display = "block") {
                dev.style.display = "none";
            }
        }

        //appearance 3
        function openappearancethree(){
            var bc = document.getElementById("background-changer")
            var at = document.getElementById("appearancetwo")
            var ath = document.getElementById("appearancethree")
            var rs = document.getElementById("reset-settings")
            var dev = document.getElementById("dev")

            if (bc.style.display = "block") {
                bc.style.display = "none";
            }
            if (at.style.display = "block") {
                at.style.display = "none";
            }
            if (ath.style.display = "none") {
                ath.style.display = "block";
            }
            if (rs.style.display = "block") {
                rs.style.display = "none";
            }
            if (dev.style.display = "block") {
                dev.style.display = "none";
            }
        }

        //reset-settings
        function openresetsettings(){
            var bc = document.getElementById("background-changer")
            var at = document.getElementById("appearancetwo")
            var ath = document.getElementById("appearancethree")
            var rs = document.getElementById("reset-settings")
            var dev = document.getElementById("dev")
            
            if (bc.style.display = "block") {
                bc.style.display = "none";
            }
            if (at.style.display = "block") {
                at.style.display = "none";
            }
            if (ath.style.display = "block") {
                ath.style.display = "none";
            }
            if (rs.style.display = "none") {
                rs.style.display = "block";
            }
            if (dev.style.display = "block") {
                dev.style.display = "none";
            }
        }

        //dev
        function opendev(){
            var bc = document.getElementById("background-changer")
            var at = document.getElementById("appearancetwo")
            var ath = document.getElementById("appearancethree")
            var rs = document.getElementById("reset-settings")
            var dev = document.getElementById("dev")
            
            if (bc.style.display = "block") {
                bc.style.display = "none";
            }
            if (at.style.display = "block") {
                at.style.display = "none";
            }
            if (ath.style.display = "block") {
                ath.style.display = "none";
            }
            if (rs.style.display = "block") {
                rs.style.display = "none";
            }
            if (dev.style.display = "none") {
                dev.style.display = "block";
            }
        }
