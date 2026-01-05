

self.onmessage = () => {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            self.postMessage(response);
        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
    xhttp.send();


}