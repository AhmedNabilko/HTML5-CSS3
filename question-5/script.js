let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

ctx.strokeStyle = "red";
ctx.lineWidth = 5;

let interval = setInterval(() => {
    if (x > 400 || y > 400) {
        alert("Animation End");
        clearInterval(interval);
    }
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();

    x += 5;
    y += 5;


}, 50); 