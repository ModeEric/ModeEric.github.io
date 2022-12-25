function tohex(num){
    var hex = num.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function drawhelix() {
var pointSize = 1; // Change according to the size of the point.
var canvas = document.getElementById("canvas");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = document.getElementById("canvas").getContext("2d");

ctx.fillStyle = "#092803"; 
var x=0;
var y=0;

randomstart = (Math.random())*Math.PI*2;

for(var j = 0; j < 10; j++) {
    randomstart=randomstart+1*Math.PI/5;

    var currnum=0;

for(var i = 0; i < 25000; i++) {


ctx.beginPath(); //Start path
x = 200*Math.sin(i/1000-50+randomstart)+window.innerWidth/2+Math.sqrt((Math.random()-Math.random())*i/4);
y = i/20; 

ctx.arc(x,y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
ctx.fill();
}
}
console.log("DONE");
}

window.addEventListener("DOMContentLoaded", drawhelix);