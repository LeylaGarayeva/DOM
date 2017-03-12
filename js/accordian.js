var accordian = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordian.length; i++) {
    accordian[i].onclick = function(){
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}