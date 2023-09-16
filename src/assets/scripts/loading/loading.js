var beforeloading;
var afterloading;

window.addEventListener('load', loadingfunction);

function loadingfunction() {
    beforeloading = document.getElementById('before-loading');
    afterloading = document.getElementById('after-loading');
    
    beforeloading.style.display = "none";
    afterloading.style.display = "block";
}