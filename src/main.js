import fetchData from "./fetch-data.js";

// const songCover = document.querySelector("#songCover");
// const songTitle = document.querySelector("#songTitle");
// const artist = document.querySelector("#artist");

// document.addEventListener("DOMContentLoaded",function(){
//     console.log(fetchData());

// })

let recommendedSongs = document.getElementById("recommendedSong");
fetchData().then((res) => {
  for (let i=0; i < res.length; i++) {
    console.log(res[i]);
    let playlist = `<li class="song-details">
    <img src=${res[i].image} alt="cover"/>
    <div class="song-content">
      <h4 class="song-title">${res[i].name}</h4>
      <p class="artist">${res[i].artist}</p>
    </div>
  </li>` 
  recommendedSongs.innerHTML += playlist;
  }
});
