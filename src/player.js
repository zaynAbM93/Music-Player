const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const nextButton = document.querySelector(".controls button .forward");
const prevButton = document.querySelector(".controls button .backward");
const songName = document.querySelector(".music-player h2");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Six Feet Apart",
    name: "Alec Benjamin",
    source: "assets/music/Alec_Benjamin_Six_Feet_Apart.mp3",
  },
  {
    title: "Someone To You",
    name: "Matt Hansen",
    source: "assets/music/Matt_Hansen_SOMEONE_TO_YOU.mp3",
  },
  {
    title: "Burning",
    name: "Lewis Capaldi",
    source: "assets/music/Lewis_Capaldi_Burning.mp3",
  },
  {
    title: "One Step Closer",
    name: "Intersection",
    source: "assets/music/Intersection_One_Step_Closer.mp3",
  },
  {
    title: "Before You",
    name: "Dyathon",
    source: "assets/music/DYATHON_Before_You_(2024)_SONGSARA.NET.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", () => {});
}

song.addEventListener("timeupdate", () => {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", () => {
  currentSongIndex = (swiper.activeIndex + 1) % songs.length;
  updateSongInfo();
  swiper.slideTo(currentSongIndex); 
  playSong(); 
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", () => {
  song.currentTime = progress.value;
});

progress.addEventListener("change", () => {
  playSong();
});



updateSongInfo();

