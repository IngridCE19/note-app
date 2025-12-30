/*Abrir una nota desde el index*/
document.addEventListener('DOMContentLoaded', () => {
    /*Buscar una nota por su ID*/

    // 1. Obtener el ID de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const idNota = urlParams.get('id');

    // 2. Si no hay ID en la URL, no hacemos nada (es una nota nueva)
    if (!idNota) return;

    // 3. Buscar la nota en localStorage
    const notas = JSON.parse(localStorage.getItem('my-notes')) || [];

    console.log(notas);
    
    // IMPORTANTE: idNota viene como String desde la URL, 
    // pero Date.now() lo guardó como Number. Usamos == para comparar.
    const notaEncontrada = notas.find(n => n.id == idNota);

    // 4. Inyectar los datos si la nota existe
    if (notaEncontrada) {
        const tituloElemento = document.getElementById('title');
        const contenidoElemento = document.getElementById('note-content');

        // Inyectar el título (si es un div/h1 usa innerText, si es input usa .value)
        tituloElemento.innerText = notaEncontrada.title;

        // Inyectar el contenido (si es un textarea usa .value)
        contenidoElemento.innerHTML = notaEncontrada.content;
        
        console.log("Nota cargada con éxito");
    } else {
        console.error("No se encontró ninguna nota con el ID:", idNota);
    }
});

/*Guardar nota*/
const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', () => {
const title = document.getElementById('title').innerText; /*Devuelven el contenido de texto de un elemento (cualquier etiqueta)*/
const content = document.getElementById('note-content').innerText;

const newNote = {
    id: Date.now(),
    title: title,
    content: content,
    date: new Date().toLocaleDateString() /*Crea una instancia del objeto Date de JS. El metodo convierte la fecha en un string*/
};

/*Array con los objetos de notas*/
let saveNotes = JSON.parse(localStorage.getItem('my-notes')) || [];

saveNotes.push(newNote);

localStorage.setItem('my-notes', JSON.stringify(saveNotes));

alert('¡Nota guardada con éxito!');

});