var body;
var page;
var selectlanguagepagesetting;

function settingfunction() {
    page = document.getElementById("page");
    if (page.style.display === "none") {
        page.style.display = "block";
    }
    else {
        page.style.display = "none";
    }
}

function nightmodepagesettingfunction() {
    
}


function selectedlanguagepagesettingfunction() {
    selectlanguagepagesetting = document.getElementById("select-language-page-setting");
    if (selectlanguagepagesetting.style.display === "none") {
        selectlanguagepagesetting.style.display = "block";
    }
    else {
        selectlanguagepagesetting.style.display = "none";
    }
}
