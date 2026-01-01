import { notesController  } from './controller/notesController.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/'){
        notesController.initIndex();
    } else if (path.includes('spacework.html')) {
        notesController.initEditor();
    }
});