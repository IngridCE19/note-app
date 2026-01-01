export const notesModel = {
    // Obtener todas las notas
    getAll() {
        return JSON.parse(localStorage.getItem('my-notes') || []);
    },

    // Obtener una nota por ID
    getById(id) {
        const notes = this.getAll();
        return notes.find(n => n.id == id);
    },

    // Guardar o Actualizar 
    save(noteData) {
        const notes = this.getAll();

        // Actulizar datos si ya existe el ID, en caso de que no, creamos una nueva nota
        const index = notes.findIndex(n => n.id == noteData.id);

        if (index !== -1) {
            notes[index] = { ...notes[index], ...noteData };
        } else {
            notes.push({...noteData, id: Date.now(), date: new Date().toLocaleDateString() });
        }

        localStorage.setItem('my-notes', JSON.stringify(notes));
    }, 

    // Eliminar nota
    delete(id) {
        const notes = this.getAll().filter(n => n.id != id);
        localStorage.setItem('my-notes', JSON.stringify(notes));
    }
};