const navbarHeight = document.getElementById('fixed--menu').offsetHeight;

// Obtener los elementos con la clase 'header__links'
const linksMenus = document.querySelectorAll('.header__links');

// Iterar sobre cada menú y agregar el evento a cada enlace
linksMenus.forEach(linksMenu => {
    const links = linksMenu.querySelectorAll('a');

    // Detectar el evento click y aplicar el scrollTo al targetId
    links.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');

            // Verificar si el enlace es interno (empieza con #) 
            // y si el enlace no es un enlace de documento externo
            if (href.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            } else {
                // Si el enlace es externo, no hacer nada y dejar que el navegador maneje el enlace
                // Esto asegura que el comportamiento de desplazamiento suave no se aplique a enlaces externos
            }
        });
    });
});
