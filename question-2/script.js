let red = document.getElementById("Red");
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");
let text = document.getElementById("text");


red.onchange = () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}
green.onchange = () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}
blue.onchange = () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}