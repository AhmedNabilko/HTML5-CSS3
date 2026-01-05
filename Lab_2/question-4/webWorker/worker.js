let count = 0;


this.onmessage = (e) => {


    if (e.data === "add") {
        count++;
    }
    else if (e.data === "sub") {
        count--;
    }

    self.postMessage(count);


}

