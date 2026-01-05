let count = document.getElementById("count");
let add = document.getElementById("add");
let sub = document.getElementById("sub");

let woker = new Worker("worker.js");



woker.onmessage = (message) => {
    count.innerText = "";
    count.innerText = message.data;

}


add.onclick = () => {

    woker.postMessage("add");

}

sub.onclick = () => {
    woker.postMessage("sub");
}
