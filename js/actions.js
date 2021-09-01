const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pausa = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const progress = document.querySelector('#progress');

play.addEventListener('click', handlePlay);
pausa.addEventListener('click', handlePause);
backward.addEventListener('click', handleBackward);
forward.addEventListener('click', handleForward);
video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleTimeUpdate);
progress.addEventListener('input',handleInput);

function handlePlay() {
    video.play();
    pause.hidden = false;
    play.hidden = true;
    forward.hidden = false;
    backward.hidden = false;
    
}
function handlePause() {
    video.pause();
    play.hidden = false;
    pause.hidden = true;
    forward.hidden = true;
    backward.hidden = true;
}
function handleBackward() {
    video.currentTime -= 10;
}
function handleForward() {
    video.currentTime += 10;
}
function handleLoaded(){
    progress.max = video.duration;
}
function handleTimeUpdate(){
    progress.value = video.currentTime;
}
function handleInput(){
    video.currentTime = progress.value;
}

