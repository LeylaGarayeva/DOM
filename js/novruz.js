var countDownDate = new Date("Marth 21, 2017 18:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("novruz").innerHTML = "Novruz bayramına " + days + " Gün " + hours + " Saat "
    + minutes + " Dəqiqə " + seconds + " Saniyə " + " qaldı!!! ";
});