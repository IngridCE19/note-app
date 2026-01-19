import { notesController  } from './controller/notesController.js';
import { loadComponent } from './utils/uiLoader.js';
import { initNavbarEvents } from './components/navbar.js';
import { initModalEvents } from './components/modals.js';

async function initApp() {
    await Promise.all([
        loadComponent('navbar', './components/navbar.html'),
        loadComponent('modal', './components/modals.html')
    ]);

    // Eventos de cada componente
    initNavbarEvents();
    initModalEvents();

    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        notesController.initIndex();
    } else if (path.includes('spacework.html')) {
        notesController.initEditor();
    }
    
    document.body.classList.add('is-ready');
}

document.addEventListener('DOMContentLoaded', initApp);