const tracks = [
    {
        title: "Hello",
        artist: "Adele",
        audioSrc: './assets/audio/Adele – Hello.mp3',
        imgSrc: './assets/img/Adele-ava.jpg',
        backgroundImgSrc: './assets/img/Adele.jpg'
    },
    {
        title: "Ainsi bas la vida",
        artist: "Indila",
        audioSrc: './assets/audio/Indila – Ainsi bas la vida.mp3',
        imgSrc: './assets/img/Indila-ava.jpg',
        backgroundImgSrc: './assets/img/Indila.jpg'
    },
    {
        title: "Kanatlarım Var Ruhumda",
        artist: "Nil Karaibrahimgil",
        audioSrc: './assets/audio/Nil Karaibrahimgil – Kanatlarım Var Ruhumda.mp3',
        imgSrc: './assets/img/Nil-ava.jpg',
        backgroundImgSrc: './assets/img/Nil.jpg'
    },
    {
        title: "Ainsi bas la vida",
        artist: "Indila",
        audioSrc: './assets/audio/Stromae – L’enfer.mp3',
        imgSrc: './assets/img/Stomae-ava.jpg',
        backgroundImgSrc: './assets/img/Stomae.jpg'
    },
];

const playButton = document.querySelector('.button-play');
const pauseButton = document.querySelector('.button-pause');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const volumeControl = document.querySelector('.control-volume');
const progressCurrent = document.querySelector('.progress-current');
const timelineStart = document.querySelector('.timeline-start');
const timelineEnd = document.querySelector('.timeline-end');
const trackTitle = document.querySelector('.track');
const trackArtist = document.querySelector('.info-group');
const trackImage = document.querySelector('.current-img');
const wrapper = document.querySelector('.wrapper');

let currentTrackIndex = 0;
let isPlay = false;
const audio = new Audio(tracks[currentTrackIndex].audioSrc);

// Функция для форматирования времени
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateProgress() {
    const { currentTime, duration } = audio;
    progressCurrent.style.width = `${(currentTime / duration) * 100}%`;
    timelineStart.textContent = formatTime(currentTime);
    timelineEnd.textContent = formatTime(duration || 0); // Защита от NaN
}

// Обновление информации о треке
function updateTrackInfo() {
    const currentTrack = tracks[currentTrackIndex];
    trackTitle.textContent = currentTrack.title;
    trackArtist.textContent = currentTrack.artist;
    trackImage.style.backgroundImage = `url(${currentTrack.imgSrc})`;
    wrapper.style.backgroundImage = `url(${currentTrack.backgroundImgSrc})`;
    audio.src = currentTrack.audioSrc;
    if (isPlay) {
        audio.play();
    }
}

// Функция для воспроизведения/паузы трека
function togglePlayPause() {
    if (isPlay) {
        audio.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    } else {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
    isPlay = !isPlay;
}

// Обработчики событий
playButton.addEventListener('click', togglePlayPause);
pauseButton.addEventListener('click', togglePlayPause);

// Управление громкостью
volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value;
});

// Управление прогрессом
audio.addEventListener('timeupdate', updateProgress);

// Управление кнопками Prev и Next
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex === 0) ? tracks.length - 1 : currentTrackIndex - 1;
    updateTrackInfo();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex === tracks.length - 1) ? 0 : currentTrackIndex + 1;
    updateTrackInfo();
});

// Переключение трека после завершения
audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex === tracks.length - 1) ? 0 : currentTrackIndex + 1;
    updateTrackInfo();
});

const progressBar = document.querySelector('.control-progres');

progressBar.addEventListener('click', (event) => {
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const clickPercentage = clickPosition / rect.width;
    // Устанавливаем новое время для аудио в зависимости от клика
    audio.currentTime = clickPercentage * audio.duration;
});

// Инициализация
updateTrackInfo();
