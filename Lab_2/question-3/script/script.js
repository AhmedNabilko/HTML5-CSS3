
let sum = document.getElementById("sum");
let get = document.getElementById("get");

let w1 = new Worker("./script/worker1.js");
let w2 = new Worker("./script/worker2.js");
w1.onmessage = (message) => {
    alert("summation is " + message.data);
}
w2.onmessage = (message) => {
    let comments = message.data;
    console.log(comments);
}

sum.onclick = () => {
    w1.postMessage("");

}
get.onclick = () => {
    w2.postMessage("");
}
