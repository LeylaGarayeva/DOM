var reng = 0;
var myVar = setInterval(function(){ setColor() }, 1000);
function setColor() {
    reng++;
    if (reng == 1  ) {  
		  var x = document.getElementById('red');
		  x.style.backgroundColor = x.style.background = "red";
		  var s = document.getElementById('yellow');
		  s.style.backgroundColor = s.style.background = "rgba(255, 212, 0, 0.25)";
		  var d = document.getElementById('green');
		  d.style.backgroundColor = d.style.background = "rgba(36, 205, 3, 0.25)";


    } else if (reng == 2) {
        var y = document.getElementById('yellow');
		  y.style.backgroundColor = y.style.background = "yellow";
		  var q = document.getElementById('red');
		  q.style.backgroundColor = q.style.background = "rgba(255, 0, 0, 0.25)";
		   var k = document.getElementById('green');
		  k.style.backgroundColor = k.style.background = "rgba(36, 205, 3, 0.25)";
    } else {
	        var z = document.getElementById('green');
	        z.style.backgroundColor = z.style.background = "green";

	       var a = document.getElementById('red');
	  		a.style.backgroundColor = a.style.background = "rgba(255, 0, 0, 0.25)";

	  	    var s = document.getElementById('yellow');
	  		s.style.backgroundColor = s.style.background = "rgba(255, 212, 0, 0.25)";
        reng = 0;
    }

}









