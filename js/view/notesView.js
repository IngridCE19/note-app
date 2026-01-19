export const notesView = {
    //Muestra tarjetas de las notas guardadas en el index.html
    renderList(notes, containerId, onClickNote, onRightClick) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Mensaje en caso de que no haya notas guardadas
        container.innerHTML = (notes.length === 0) ? '<p>There are no saved notes yet</p>' : '';

        // Mostrar cada tarjeta con una nota guardada
        notes.forEach(note => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.innerHTML = `
                <button>
                    <img src="assets/bitmap.png" class="icon-note" alt="icon note">
                    <h3>${note.title}</h3>
                    <p>${note.date}</p>
                </button>
            `;

            card.onclick = () => onClickNote(note.id);

            card.oncontextmenu = (event) => {
                event.preventDefault();
                onRightClick(note.id, event);
            }; 

            container.appendChild(card);
        });
    },

    // Recibe la nota (objeto 'my-note') e inyecta el valor de las claves title y content en los elementos con el id correspondiente
    fillEditor(note) {
        if (!note) return;
        document.getElementById('title').innerText = note.title;
        document.getElementById('note-content').innerText = note.content;
    },

    // Capturar los datos de la nota (titulo y contenido)
    getNoteData() {
        return {
            title: document.getElementById('title').innerText,
            content: document.getElementById('note-content').innerText
        };
    }
};