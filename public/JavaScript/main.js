var button = document.getElementById("navToggler")
var count = 0;
button.addEventListener("click", () => {
    if(count % 2 == 0) {
        document.getElementById("HFOTitle").style.visibility = "hidden";
    } else {
        document.getElementById("HFOTitle").style.visibility = "visible";
    }
    count++;
})