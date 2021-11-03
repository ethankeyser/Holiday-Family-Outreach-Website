let windowWidth;
function getWindowWidth() {
    windowWidth = document.documentElement.clientWidth;
    console.log(windowWidth);
    if(windowWidth <= 975) {
        document.getElementById("HFOTitle").style.visibility = "hidden";
    } else {
        document.getElementById("HFOTitle").style.visibility = "visible";
    }
}
window.addEventListener('resize', getWindowWidth)
window.addEventListener('load', getWindowWidth)




