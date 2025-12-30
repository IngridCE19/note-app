/*Insertar modal y configurar los eventos en el orden correcto*/
fetch("/components/modals.html")
    .then(res => res.text())
    .then(html => {
        /*Insertamos el archivo modals.html*/
        const modalBase = document.getElementById("modal");
        modalBase.innerHTML = html;
        
        eventosModales();
})
.catch(error => console.error("Error cargando el modal: ", error));

function eventosModales() {
    const modalBase = document.getElementById("modal");

    /*Menu para crear una nueva nota/folder*/
    const btnNewNote = document.getElementById('button-new-note');
    const modalNewNote = document.getElementById('container-new-note');

    if (btnNewNote && modalNewNote) {
        btnNewNote.addEventListener('click', () => {
            modalNewNote.classList.toggle('show');
        });
    }

    /*Menu para insertar*/
    const btnInsert = document.getElementById('insert-btn');
    const modalInsert = document.getElementById('container-insert');

    if (btnInsert && modalInsert) {
        btnInsert.addEventListener('click', () => {
            modalInsert.classList.toggle('show');
        })
    }

    /*Boton cerrar*/ 
    const closeButtons = document.querySelectorAll('#close-options');
    const btnModal = document.querySelectorAll('.hiden');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btnModal.forEach(btn => {
                btn.classList.remove('show');
            })
        });
    });
}