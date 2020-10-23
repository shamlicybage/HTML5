var canvas = document.getElementById('can');
console.log(canvas);

var ctx = canvas.getContext('2d');
var x = 150;
var y = 150;
var radius = 75;
//var startAngle = 1.1 * Math.PI;
var startAngle =0;
//var endAngle = 1.9 * Math.PI;
var endAngle = Math.PI;
var counterClockwise = true;
ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'violet';
ctx.stroke();


ctx.beginPath();
ctx.arc(150, 160, 95, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'indigo';
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 170, 115, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'rgb(103, 200, 233)';
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 180, 135, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'lightgreen';
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 190, 155, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'yellow';
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 200, 175, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'orange';
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 210, 195, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 10;
// line color
ctx.strokeStyle = 'red';
ctx.stroke();

