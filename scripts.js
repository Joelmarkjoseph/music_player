let c = 0;
let song = document.getElementById("song");
let pbar = document.getElementById("line");
let btn = document.getElementById("ctrl");

window.onload = function() {
    // Get the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const songFile = urlParams.get('song');
    const songName = urlParams.get('songname');
    if (songFile) {
        let as = document.getElementById('audiosrc');
        as.src = songFile;
        song.load();
        let sn = document.getElementById('htagsname');
        sn.innerHTML=songName;
    }
};
song.onloadedmetadata = function() {
    pbar.max = song.duration;
    pbar.value = song.currentTime;
};
pbar.onchange = function() {
    song.currentTime = pbar.value;
    if (song.paused) {
        song.play();
        btn.classList.remove('fa-play');
        btn.classList.add('fa-pause');
    }
};

function playpause() {
    if (c % 2 === 0) {
        btn.classList.remove('fa-play');
        btn.classList.add('fa-pause');
        song.play();
    } else {
        btn.classList.remove('fa-pause');
        btn.classList.add('fa-play');
        song.pause();
    }
    c += 1;
}

song.addEventListener('timeupdate', () => {
    pbar.value = song.currentTime;
});

function goback() {
    location.replace('./index.html');
}