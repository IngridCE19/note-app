fetch("/components/navbar.html")
    .then(res => res.text())
    .then( html => {
        const container = document.getElementById("navbar");
        container.innerHTML = html;

        eventosNavbar();
    });

function eventosNavbar() {
    const hamburgerBoton = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBoton && navMenu) {
        hamburgerBoton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        })
    }
}