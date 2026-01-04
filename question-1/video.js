//!video
let frozenVideo = document.getElementById("frozen");
//& button
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let start = document.getElementById("start");
let end = document.getElementById("end");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let mute = document.getElementById("mute");
let duration;
//^ range 
let volume = document.getElementById("volume");
let speed = document.getElementById("Speed");
let timeLine = document.getElementById("time-line");

//* label
let currentTime = document.getElementById("current-time");
let totalTime = document.getElementById("total-time");

function getTime(x) {

    let minutes = Math.floor(x / 60);
    let seconds = Math.floor(x % 60);


    let min = minutes.toString().padStart(2, '0');
    let sec = seconds.toString().padStart(2, '0');


    return min + ":" + sec;

}

frozenVideo.addEventListener("loadedmetadata", () => {
    duration = frozenVideo.duration;
    totalTime.innerText = getTime(duration);


});

frozenVideo.addEventListener("timeupdate", () => {
    let current = frozenVideo.currentTime;
    currentTime.innerText = getTime(current);
    timeLine.value = (current / duration);


})


play.onclick = () => {
    frozenVideo.play();

}


stop.onclick = () => {
    frozenVideo.pause();

}
start.onclick = () => {
    frozenVideo.currentTime = 0;
}
end.onclick = () => {
    frozenVideo.currentTime = frozenVideo.duration;
}
next.onclick = () => {
    frozenVideo.currentTime += 10;
}
prev.onclick = () => {
    frozenVideo.currentTime -= 10;
}
mute.onclick = () => {
    frozenVideo.muted = true;
    volume.value = 0;
    frozenVideo.volume = 0;
}

volume.onchange = () => {
    frozenVideo.muted = false;
    frozenVideo.volume = volume.value;
}

speed.onchange = () => {
    frozenVideo.playbackRate = speed.value;
}



