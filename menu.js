//declare music const
const music = new Audio("./assets/sounds/garden.mp3");
const muteButton = document.querySelector("#mute-button");
const aboutButton = document.querySelector("#about-button");
const closeButton = document.querySelector("#close-button");
const modal = document.querySelector("#modal");

//when the song ends, play again
music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//turning off mute turns on music
muteButton.addEventListener("click", function(event){
    if(music.muted){
        music.muted = false;
        music.currentTime = 0;
        music.volume = 0.05;
        muteButton.innerHTML = "&#128266";
        music.play();
    }  else{
        music.muted = true;
        muteButton.innerHTML = "&#128263";
        music.pause();
    }
});

aboutButton.addEventListener("click", function(event){
    modal.classList = ("");
});

closeButton.addEventListener("click", function(event){
    modal.classList = ('hidden');
});