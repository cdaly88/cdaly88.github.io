var img = new Image();   // Create new img element
var ctx = document.getElementById('canvas').getContext('2d');
let x = 100;
let y = 0;
img.addEventListener('load', function() {
   ctx.drawImage(img, x, y);
}, false);
window.addEventListener('keydown', function(e) {
   if (e.keyCode == 40) {
       y += 10;
   }
   if (e.keyCode == 38) {
       y -= 10;
   }
   if (e.keyCode == 37) {
       x -= 10;
   }
   if (e.keyCode == 39) {
       x += 10;
   }
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(img, x, y);
}, false);
img.src = 'myImage.png'; // Set source path