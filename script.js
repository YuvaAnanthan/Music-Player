const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const songTitle = document.getElementById('song-title');

const songs = ['song1.mp3', 'song2.mp3'];
let songIndex = 0;

function loadSong(song) {
  audioPlayer.src = `music/${song}`;
  songTitle.textContent = song;
}

function playSong() {
  audioPlayer.play();
  playBtn.textContent = '⏸️';
}

function pauseSong() {
  audioPlayer.pause();
  playBtn.textContent = '▶️';
}

playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

// Load the first song initially
loadSong(songs[songIndex]);
