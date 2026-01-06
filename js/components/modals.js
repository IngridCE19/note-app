/*Funcion para los eventos de cada modal */
export function initModalEvents() {
    const modalBase = document.getElementById("modal");

    /* Boton menu para crear un nuevo archivo en index.html */
    const btnNewNote = document.getElementById('button-new-note');
    const modalNewNote = document.getElementById('container-new-note');

    if (btnNewNote && modalNewNote) {
        btnNewNote.addEventListener('click', () => {
            modalNewNote.classList.toggle('show');
        });
    }

    /*Boton menu para insertar contenido multimedia en el editor*/
    const btnInsert = document.getElementById('insert-btn');
    const modalInsert = document.getElementById('container-insert');

    if (btnInsert && modalInsert) {
        btnInsert.addEventListener('click', () => {
            modalInsert.classList.toggle('show');
        });
    }

    /*Boton menu para modificar el formato en el editor*/
    const btnFormat = document.getElementById('format-btn');
    const modalFormat = document.getElementById('container-format');
    
    if (btnFormat && modalFormat) {
        btnFormat.addEventListener('click', () => {
            modalFormat.classList.toggle('show');
        });
    }

    /* Click derecho para ver menu de las operaciones sobre un archivo en index.html */
    const btnCardNote = document.getElementById('note-container');
    const modalNoteOptions = document.getElementById('container-note-options');

    if (btnCardNote && modalNoteOptions) {
        btnCardNote.addEventListener('contextmenu', () => {
            modalNoteOptions.classList.toggle('show');
        })
    }

    /* Boton cerrar modal */ 
    const closeButtons = document.querySelectorAll('.close-btn');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalMenu = btn.closest('.hiden');

            if (modalMenu) {
                modalMenu.classList.remove('show');
            }
        });
    });
}