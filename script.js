let songIndex = 0;

let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let progressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

let currentSong = songs[0];
// let audioElement = new Audio(currentSong.filePath);
audioElement = new Audio(songs[songIndex].filePath);

songItems.forEach((songItem, i) => {
  songItem.getElementsByTagName("img")[0].src = songs[i].coverPath;
  songItem.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// await audioElement.play();
//Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  let image = masterPlay.querySelector("img");
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    image.src = "./circle-pause-regular.svg";
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    image.src = "./circle-play-solid.svg";
    gif.style.opacity = 0;
  }
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
    console.log('1212', 1212)
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});
const makeAllPlay = (i) => {
  Array.from(document.getElementsByClassName("playbtn")).forEach((element) => {
    if (songIndex != i) audioElement.pause();
    element.src = "./circle-play-solid.svg";
  });
};

Array.from(document.getElementsByClassName("playbtn")).forEach((element, i) => {
  element.addEventListener("click", (e) => {
    makeAllPlay(i);
    if (audioElement.paused || audioElement.currentTime <= 0) {
      masterPlay.querySelector("img").src = "./circle-pause-regular.svg";
      e.target.src = "./circle-pause-regular.svg";
      if (songIndex != i) {
        songIndex = i;
        // audioElement = new Audio(songs[i].filePath);
        audioElement.src = songs[i].filePath; // Update the audio source
        audioElement.load();
      }
      audioElement.play();
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.querySelector("img").src = "./circle-play-solid.svg";
      gif.style.opacity = 0;
    }
  });
});



