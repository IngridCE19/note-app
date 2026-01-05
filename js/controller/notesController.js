import { notesModel } from '../model/notesModel.js';
import { notesView } from '../view/notesView.js';

export const notesController = {
    // Obtiene las notas mediante el modelo y las muestra con la vista
    initIndex() {
        const notes = notesModel.getAll();

        // El metodo renderList recibe todas las notas guardadas, las inyecta en el elemento con el id 'note-container' y ejecuta una arrow function en caso de dar clic en la tarjeta. Esa funcion abre una ventana a la pagina spacework.html, en donde la url contiene el id para inyectar la nota
        notesView.renderList(
            notes, 
            'note-container', 
            (id) => {
                window.location.href = `spacework.html?id=${id}`;
            },
            (id) => {
                const note = notesModel.getById(id);
                const titleModal = document.getElementById('name-file');
                
                if (note && titleModal) {
                    titleModal.innerText = note.title;
                }

                const deleteFile = document.getElementById('delete-file');
                if (deleteFile) {
                    deleteFile.onclick = () => { 
                        idNotesSelection = note.id;
                        notesModel.delete(idNotesSelection);

                        
                        this.initIndex();
                    }
                }
            }
        );
    }, 

    // Lógica para abrir el editor con la nota mediante el id de la url (spacework.html)
    initEditor() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log(urlParams);
        console.log(id);

        // Obtiene la nota mediante su id e inyecta su contenido en el editor
        if (id) {
            const note = notesModel.getById(id);
            notesView.fillEditor(note);
        }

        /*Guardar nota*/
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.onclick = () => {
                const data = notesView.getNoteData();
                notesModel.save({ ...data, id: id ? Number(id) : null });
                alert('¡NOTA GUARDADA :)!');
            };
        }
    }
};

let idNotesSelection = null;