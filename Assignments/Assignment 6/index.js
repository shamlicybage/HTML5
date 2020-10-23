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




function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var sources = {
    image1: 'https://www.stuff.tv/sites/stuff.tv/files/brands/Apple/bestiphone_stuff_new_3.png',
    image2: 'https://res.cloudinary.com/macsales/image/upload/w_auto,c_scale,f_auto,q_auto,dpr_auto/used-macs-hero-ipad',
    image3: 'https://wallpapercave.com/wp/wp5390669.jpg'
  };

  loadImages(sources, function(images) {
    context.drawImage(images.image1, 10, 30, 250, 137);
    context.drawImage(images.image2, 250, 30, 250, 137);
    context.drawImage(images.image3, 130, 170, 250, 137);
  });

