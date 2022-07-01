console.log("welcome to singer website");

let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let bar = document.getElementById('bar');
let gif = document.getElementById('gif');
let imgnew = document.getElementById('imgnew');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songsname: "kal ho naa ho", filepath: "1.mp3", coverpath: "LOGO.png" },
    { songsname: "Muskurane ki wajah tum ho", filepath: "2.mp3", coverpath: "2.jpg" },
    { songsname: "Ek pyar ka nagma hai", filepath: "3.mp3", coverpath: "3.jpg" },
    { songsname: "Lag ja gale", filepath: "4.mp3", coverpath: "4.jpg" },
    // {songsname:"kal ho naa ho", filepath:"songs/5.mp3" ,coverpath:"covers/5.mp3"},
    // {songsname:"kal ho naa ho", filepath:"songs/6.mp3" ,coverpath:"covers/6.mp3"},
    // {songsname:"kal ho naa ho", filepath:"songs/7.mp3" ,coverpath:"covers/7.mp3"},  
    // {songsname:"kal ho naa ho", filepath:"songs/8.mp3" ,coverpath:"covers/8.mp3"},
    // {songsname:"kal ho naa ho", filepath:"songs/9.mp3" ,coverpath:"covers/9.mp3"},
    // {songsname:"kal ho naa ho", filepath:"songs/10.mp3" ,coverpath:"covers/10.mp3"},

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsname;
})


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        imgnew.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        imgnew.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    bar.value = progress;
})
bar.addEventListener('change', () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('itemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
    })
}

Array.from(document.getElementsByClassName('itemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
       Index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${Index+1}.mp3`;
        masterSongName.innerText = songs[Index].songsname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        img.src = songs[Index].coverpath;
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(Index>=9){
       Index = 0
    }
    else{
        Index += 1;
    }
    audioElement.src = `${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(Index<=0){
        Index = 0
    }
    else{
        Index -= 1;
    }
    audioElement.src = `${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})