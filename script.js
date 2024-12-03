console.log("Welcome to spotify");
//initialise thhe variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
console.log("masterPlay", masterPlay);
let progressBar = document.getElementById("progressBar");
let songs = [
  {
    songName: "salam-1-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.mp3",
  },
  {
    songName: "salam-2-ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.mp3",
  },
  {
    songName: "salam-3-ishq",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.mp3",
  },
  {
    songName: "salam-4-ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.mp3",
  },
  {
    songName: "salam-5-ishq",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.mp3",
  },
  {
    songName: "salam-6-ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.mp3",
  },
  {
    songName: "salam-7-ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.mp3",
  },
  {
    songName: "salam-8-ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.mp3",
  },
  {
    songName: "salam-9-ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.mp3",
  },
];

// await audioElement.play();
//Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  let image = masterPlay.querySelector("img");
  console.log("image", image);
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    image.src = "./circle-pause-regular.svg";
  } else {
    audioElement.pause();
    image.src = "./circle-play-solid.svg";
  }
});
//listen to events
progressBar.addEventListener("timeupdate", () => {
  console.log("timeUpdate", timeUpdate);
});
