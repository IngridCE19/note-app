/*Funcion para los eventos de cada modal */
export function initModalEvents() {
    const modalBase = document.getElementById("modal");

    function renderClick(btn, modalId) {
        if (btn && modalId) {
            btn.onclick = () => modalId.classList.toggle('show');
        }
    }

    function renderContextMenu(btn, modalId) {
        if (btn && modalId) {
            btn.addEventListener('contextmenu', () => {
                modalId.classList.toggle('show');
            })
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

    /* Click derecho para ver menu de las operaciones sobre un archivo en index.html */
    const btnCardNote = document.getElementById('note-container');
    const modalNoteOptions = document.getElementById('container-note-options');

    renderContextMenu(btnCardNote, modalNoteOptions);

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