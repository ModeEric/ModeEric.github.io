function tohex(num){
    var hex = num.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}
function drawcircle(num) {

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = document.getElementById("canvas").getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#0047AB";
ctx.fillRect(600,500, 200, 200);
num=num+1;
for(var i=0;i<num+1;i++){ 
    drawLine(ctx,[600,600+100*(i)/num],[600+100*(i)/num,700]);
    drawLine(ctx,[800,600+100*(i)/num],[800-100*(i)/num,700]);
    drawLine(ctx,[600,600-100*(i)/num],[600+100*(i)/num,500]);
    drawLine(ctx,[800,600-100*(i)/num],[800-100*(i)/num,500]);

}
console.log("DONE");
}
function drawcirclemany(){
    drawcircle(20);
}

function drawcircleanimate(){
    let start = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 1000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  drawcircle(timePassed/50+3);

}, 10);
}

window.addEventListener("DOMContentLoaded", drawcircleanimate);