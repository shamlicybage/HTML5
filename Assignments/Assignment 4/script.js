var ex = document.getElementById('ex');
if (ex.getContext) {
    //document.querySelector('p').innerHTML="Your Browser supports Canvas!!";
    
    var context = ex.getContext('2d');
    
    
    context.beginPath();
    
    context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    context.fillStyle="yellow";
    context.fill();
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    context.stroke();
  } else {
    document.querySelector("div").innerHTML="Your Browser Doesn't support Canvas!!";
  }

