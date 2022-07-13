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
    document.getElementById("open-theme-editor").addEventListener("click", openthemeeditor)
    document.getElementById("open-menu-editor").addEventListener("click", openmenueditor)
    document.getElementById("open-noted-settings").addEventListener("click", opennotedsettings)
    document.getElementById("open-reset-settings").addEventListener("click", openresetsettings)
    document.getElementById("open-dev").addEventListener("click", opendev)

        //open display theme editor
        function openthemeeditor(){
            var bc = document.getElementById("theme-editor")
            var at = document.getElementById("menu-editor")
            var ath = document.getElementById("noted-settings")
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
            // background
                //colors
                    //addEventListener click
                    document.getElementById("red").addEventListener("click", red)
                    document.getElementById("orange").addEventListener("click", orange)
                    document.getElementById("yellow").addEventListener("click", yellow)
                    document.getElementById("green").addEventListener("click", green)
                    document.getElementById("cyan").addEventListener("click", cyan)
                    document.getElementById("blue").addEventListener("click", blue)
                    document.getElementById("purple").addEventListener("click", purple)
                    document.getElementById("magenta").addEventListener("click", magenta)
                    document.getElementById("pink").addEventListener("click", pink)
                    document.getElementById("black").addEventListener("click", black)
                    document.getElementById("white").addEventListener("click", white)
                    document.getElementById("opencolorpicker").addEventListener("click", opencp)
                    document.getElementById("closecolorpicker").addEventListener("click", closecp)
                    document.getElementById("openinfobox").addEventListener("click", openib)
                    document.getElementById("closeinfobox").addEventListener("click", closeib)
                    
                    //change backgr color functions
                    function red(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: red;");
                    }
                    function orange(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: orange;");
                    }
                    function yellow(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: yellow;");
                    }
                    function green(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: green;");
                    }
                    function cyan(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: cyan;");
                    }
                    function blue(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: blue;");
                    }
                    function purple(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: purple;");
                    }
                    function magenta(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: magenta;");
                    }
                    function pink(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: pink;");
                    }
                    function black(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: gray;");
                    }
                    function white(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-color: gray;");
                    }
                    //color-picker
                    function opencp(){
                        var x = document.getElementById("colorpicker")
                        if (x.style.display = "none") {
                            x.style.display = "block";
                        }
                    }
                    function closecp(){
                        var x = document.getElementById("colorpicker")
                        if (x.style.display = "block") {
                            x.style.display = "none";
                        }
                    }
                        //info box
                        function openib(){
                            var x = document.getElementById("information-box")
                            if (x.style.display = "none") {
                                x.style.display = "block";
                            }
                        }
                        function closeib(){
                            var x = document.getElementById("information-box")
                            if (x.style.display = "block") {
                                x.style.display = "none";
                            }
                        }

                //image
                    //addEventListeners click
                    document.getElementById("bran-castle-romania").addEventListener("click", bcr)
                    document.getElementById("5052518926610576400").addEventListener("click", fof)
                    document.getElementById("284466").addEventListener("click", taf)
                    document.getElementById("2637771").addEventListener("click", tst)
                    document.getElementById("bg-light").addEventListener("click", bg)
                    document.getElementById("hero").addEventListener("click", hero)

                    //change backgr image function
                    function bcr(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/bran-castle-romania.jpg');");
                    }
                    function fof(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/5052518926610576400.jpg');");
                    }
                    function taf(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/284466.jpg');");
                    }
                    function tst(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/2637771.jpg');");
                    }
                    function bg(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/bg-light.jpg');");
                    }
                    function hero(){
                        var dashb = document.getElementById("dashb-backgr")
                        if (dashb.style = "background-image: url('../../../src/images/background/hero.jpg');");
                    }

        //open display appearance 2
        function openmenueditor(){
            var bc = document.getElementById("theme-editor")
            var at = document.getElementById("menu-editor")
            var ath = document.getElementById("noted-settings")
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

        //open display appearance 3
        function opennotedsettings(){
            var bc = document.getElementById("theme-editor")
            var at = document.getElementById("menu-editor")
            var ath = document.getElementById("noted-settings")
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

        //open display reset-settings
        function openresetsettings(){
            var bc = document.getElementById("theme-editor")
            var at = document.getElementById("menu-editor")
            var ath = document.getElementById("noted-settings")
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

        //open display dev
        function opendev(){
            var bc = document.getElementById("theme-editor")
            var at = document.getElementById("menu-editor")
            var ath = document.getElementById("noted-settings")
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
