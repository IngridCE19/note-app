/*Funcion para los eventos de cada modal */
export function initModalEvents() {
    function renderClick(btn, modal) {
        if (btn && modal) {
            btn.addEventListener('click', () => {
                modal.classList.toggle('show');
            });
        }
    }

    /* Boton menu para crear un nuevo archivo en index.html */
    const btnNewNote = document.getElementById('button-new-note');
    const modalNewNote = document.getElementById('container-new-note');

    renderClick(btnNewNote, modalNewNote);

    /*Boton menu para insertar contenido multimedia en el editor*/
    const btnInsert = document.getElementById('insert-btn');
    const modalInsert = document.getElementById('container-insert');

    renderClick(btnInsert, modalInsert);

    /*Boton menu para modificar el formato en el editor*/
    const btnFormat = document.getElementById('format-btn');
    const modalFormat = document.getElementById('container-format');

    renderClick(btnFormat, modalFormat);

    /* Click derecho en nota */
    const fileContainer = document.getElementById('files')
    
    if (fileContainer) {
        fileContainer.addEventListener('contextmenu', (event) => {
            const note = event.target.closest('.note-card');
            const modalOptions = document.getElementById('container-note-options');

            if (note && modalOptions) {
                modalOptions.classList.toggle('show');
            }
        })
    }

    /* Boton cerrar modal */ 
    const closeButtons = document.querySelectorAll('.close-btn');

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalMenu = btn.closest('.hidden');

            if (modalMenu) {
                modalMenu.classList.remove('show');
            }
        });
    });
}