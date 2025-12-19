/*Insertar modal y configurar los eventos en el orden correcto*/
fetch("/components/modals.html")
    .then(res => res.text())
    .then(html => {
        /*Insertamos el archivo modals.html*/
        const container = document.getElementById("options-modal");
        container.innerHTML = html;
        
        /*La función configurarModal debe ir dentro del fetch ya que no se podra ejecutar los botones del modal hasta que en el archivo principal (como index.html) ya este incertado el código del modals.html (gracias a como funciona la asincronia con fetch)*/
        configuracionEventosModal();
})
.catch(error => console.error("Error cargando el modal: ", error));

/*Configuración de los eventos en el modal con buenas prácticas (encapsulamiento)*/

function configuracionEventosModal() {
    const buttonOptions = document.getElementById('button-options');
    const optionsModal = document.getElementById('options-modal');
    const buttonClose = document.getElementById('close-options');

    /*Verificar que los elementos existen antes de ejecutar los listeners */
    /*Los condicionales aislan posibles errores que pueden romper el funcionamiento de la pagina*/
    if (buttonOptions && optionsModal) {
        buttonOptions.addEventListener('click', () => {
            optionsModal.classList.toggle('show');
        });
    }

    /*El método toggle pertenece al objeto classList, el cual comprueba las clases existentes del elemento, si existe el nombre de clase este lo borra, si no existe la añade*/
    /*En este caso anteriormente se agrego como clase nueva 'show' al modal, activando la lógica de css, al volverla a insertar esta se borra, ocultando el modal por su unica clase 'hiden' */
    if (buttonClose && optionsModal) {
        buttonClose.addEventListener('click', () => {
            optionsModal.classList.toggle('show');
        });
    }
}