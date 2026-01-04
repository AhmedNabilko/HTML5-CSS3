


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let up = true;
let count = 0;
const max = 10;

let interval = setInterval(() => {
    clearInterval();
    ctx.clearRect(0, 0, 400, 300);

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";


    if (count >= 10) {
        ctx.arc(200, 150, 80, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        clearInterval(interval);
    } else {

        ctx.arc(200, 150, 80, 0, Math.PI, up);
        ctx.fill();
        ctx.stroke();

        up = !up;
        count++;
    }
    ctx.closePath();
}, 500);


