setTimeout(() => {
    document.getElementById("container").style.opacity = 0;

    // Redireccionar a home.html después de 2 segundos (duración de la transición)
    setTimeout(() => {
        window.location.href = "/pages/home.html";
    }, 2000);
}, 3000); // Espera inicial de 3 segundos
