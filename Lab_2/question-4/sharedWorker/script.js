let count = document.getElementById("count");
let add = document.getElementById("add");
let sub = document.getElementById("sub");

let sharedWorker = new SharedWorker("sharedWorker.js");

sharedWorker.port.start();

sharedWorker.port.onmessage = (message) => {
    count.innerText = "";
    count.innerText = message.data;

}


add.onclick = () => {

    sharedWorker.port.postMessage("add");

}

sub.onclick = () => {
    sharedWorker.port.postMessage("sub");
}


sharedWorker.port.postMessage("");