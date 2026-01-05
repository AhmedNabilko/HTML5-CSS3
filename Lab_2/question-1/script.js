let start = document.getElementById("start");
let stop = document.getElementById("stop");
let map = document.getElementById("map");
let geoLocaion;

function success(e) {
    let x = e.coords.latitude;
    let y = e.coords.longitude;
    map.setAttribute("src", "http://maps.google.com/maps?q=" + x + "," + y + "&z=15&output=embed");
    console.log(x, y);
}

function failed(e) {
    switch (e.code) {
        case 1:
            console.log(e.message);
            break;

        case 2:
            console.log(e.message);
            break;
        case 3:
            console.log(e.message);
            break;

    }
}

function getLocation() {
    geoLocaion = navigator.geolocation.watchPosition(success, failed);
}

start.onclick = () => {
    if (navigator.geolocation) {
        getLocation();
    }
    console.log("starting live Locaiton");

}


stop.onclick = () => {
    if (geoLocaion) { navigator.geolocation.clearWatch(geoLocaion); }
    console.log("stop live Locaiton");
}
