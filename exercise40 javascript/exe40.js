// Get EXISTING video element
const videoElement = document.getElementById('video');

// Controls
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const creator = document.getElementById('creator');

const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

// Video list
const videos = [
  {
    title: "Cartoon",
    creator: "Local",
    src: "videos/funybisad.mp4"
  },
  {
    title: "Salah Song",
    creator: "Local",
    src: "videos/hees.mp4"
  },
  {
    title: "Football Clip",
    creator: "Local",
    src: "videos/ciyaar.mp4"
  }
];

let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// Load video
function loadVideo(video) {
  title.textContent = video.title;
  creator.textContent = video.creator;
  videoElement.src = video.src;
  videoElement.load();
}

// Initial load
loadVideo(videos[videoIndex]);

// Play
function playVideo() {
  playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
  videoElement.play();
  isPlaying = true;
}

// Pause
function pauseVideo() {
  playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
  videoElement.pause();
  isPlaying = false;
}

// Next video
function nextVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex = (videoIndex + 1) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
  }, 200);
}

// Previous video
function previousVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
  }, 200);
}

// Update progress
function updateProgress() {
  if (isNaN(videoElement.duration)) return;

  const percent =
    (videoElement.currentTime / videoElement.duration) * 100;
  progress.style.width = `${percent}%`;

  const durationMinutes = Math.floor(videoElement.duration / 60);
  const durationSeconds = Math.floor(videoElement.duration % 60);
  durationEl.textContent =
    `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

  const currentMinutes = Math.floor(videoElement.currentTime / 60);
  const currentSeconds = Math.floor(videoElement.currentTime % 60);
  currentTimeEl.textContent =
    `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

  videoElement.playbackRate = speed;
}

// Seek
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  videoElement.currentTime = (clickX / width) * videoElement.duration;
}

// Events
playBtn.addEventListener('click', () => {
  isPlaying ? pauseVideo() : playVideo();
});

nextBtn.addEventListener('click', nextVideo);
prevBtn.addEventListener('click', previousVideo);

videoElement.addEventListener('timeupdate', updateProgress);
videoElement.addEventListener('loadedmetadata', updateProgress);
videoElement.addEventListener('ended', nextVideo);

progressContainer.addEventListener('click', setProgress);

volumeSlider.addEventListener('input', e => {
  videoElement.volume = e.target.value;
});

speedSelect.addEventListener('change', e => {
  speed = parseFloat(e.target.value);
  videoElement.playbackRate = speed;
});
