// Lógica para ocultar y mostrar el menu de la barra de navegación 
export function initNavbarEvents() {
    const hamburgerBoton = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBoton && navMenu) {
        hamburgerBoton.onclick = () => navMenu.classList.toggle('active');
    }
}