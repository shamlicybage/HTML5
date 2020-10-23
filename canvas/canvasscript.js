var ex = document.getElementById('ex');
var context = ex.getContext('2d');
// context.fillStyle="rgb(0,255,255)";
// context.fillRect(30,30,50,50);

// context.beginPath();
// context.moveTo(200,50);
// context.lineTo(200,100);
// context.lineTo(25,100);
// context.fill();

// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');

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