document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// Parallax initialization
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
})


const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.querySelectorAll('img'));
const indicatorsContainer = document.querySelector('.carousel-indicators');
let currentIndex = 0;

images[currentIndex].classList.add('active');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

prevButton.addEventListener('click', () => updateCarousel(currentIndex - 1));
nextButton.addEventListener('click', () => updateCarousel(currentIndex + 1));

setInterval(() => updateCarousel(currentIndex + 1), 3000);


//--------Indicators defined---------//

/* image is the current image being processed, and index is its index in the images array. The function creates a new div, adds the carousel-indicator class to it, sets up a click event listener that calls updateCarousel(index), appends the new div to indicatorsContainer, and then returns the new div. The map() function then returns a new array containing all these new div elements.*/

const indicators = images.map((image, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    indicator.addEventListener('click', () => updateCarousel(index));
    indicatorsContainer.appendChild(indicator);
    return indicator;
});

//--------Function to change image---------//
const updateCarousel = (newIndex) => {
    images[currentIndex].classList.remove('active');
    currentIndex = (newIndex + images.length) % images.length;
    images[currentIndex].classList.add('active');
    updateIndicators();
};

//--------Function to update indicators---------//
const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
};

updateIndicators();

// Media player

const audioPlayer = document.getElementById('player');
const playPauseButton = document.getElementById('play-pause-button');

// Iniciar la reproducción después de un segundo
window.addEventListener('load', () => {
    // setTimeout(() => {
    //     audioPlayer.play();
    // }, 1000); // Retraso de 1 segundo
}
);

// Control de reproducción/pausa
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
        playPauseButton.classList.remove('paused');
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
        playPauseButton.classList.add('paused');
    }
});

// countdown 

const targetDate = new Date("2025-02-07").getTime(); // Set target date
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.querySelector("#days").textContent = days;
    countdownElement.querySelector("#hours").textContent = hours;
    countdownElement.querySelector("#minutes").textContent = minutes;
    countdownElement.querySelector("#seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "¡Ya es hora de la fiesta!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
