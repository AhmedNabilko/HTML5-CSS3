let count = 0;
let ports = [];
let port;
this.onconnect = (e) => {

    port = e.ports[0];


    ports.push(port);
    port.start();

    port.onmessage = (e) => {
        if (e.data === "add") {
            count++;
        }
        else if (e.data === "sub") {
            count--;
        }


        for (let i = 0; i < ports.length; i++) {
            ports[i].postMessage(count);
        }


    };


}
