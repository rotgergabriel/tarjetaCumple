setTimeout(() => {
    document.getElementById("container").style.opacity = 0;

    // Redireccionar a home.html después de 2 segundos (duración de la transición)
    setTimeout(() => {
        window.location.href = "/pages/home.html";
    }, 1000);
}, 4000); // Espera inicial de 5 segundos

const audioPlayer = document.getElementById('player');
const playPauseButton = document.getElementById('play-pause-button');
