// Función auxiliar para cerrar todos los modales abiertos
function closeAllModals() {
    const activeModals = document.querySelectorAll('.modal.show');
    activeModals.forEach(modal => {
        modal.classList.remove('show');
    });
}

export function initModalEvents() {
    // Abrir modal con click izquierdo
    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-open-modal]');

        if (trigger) {
            // Cerramos cualquier modal abierto antes de proceder
            closeAllModals();

            const modalId = trigger.dataset.openModal;
            const modal = document.getElementById(modalId);

            if (modal) {
                const rect = trigger.getBoundingClientRect();
                modal.style.top = `${rect.top + 20}px`;
                modal.style.left = `${rect.left + rect.width + 20}px`;
                modal.classList.add('show');
            }
        }
    });

    // Abrir modal con clic derecho (Context Menu)
    const fileContainer = document.getElementById('files');
    if (fileContainer) {
        fileContainer.addEventListener('contextmenu', (event) => {
            const note = event.target.closest('.note-card');
            const modalOptions = document.getElementById('container-note-options');

            event.preventDefault();

            if (note && modalOptions) {
                closeAllModals();

                const rect = note.getBoundingClientRect();
                modalOptions.style.top = `${rect.top + 20}px`;
                modalOptions.style.left = `${rect.left + rect.width + 20}px`;
                modalOptions.classList.add('show');
            }
        });
    }

    // Cerrar modal al hacer clic en botones de cierre o fuera de ellos
    document.addEventListener('click', (event) => {
        const closeButton = event.target.closest('.icon-close');
        
        // Si el usuario hace clic en el botón de cerrar
        if (closeButton) {
            const modal = closeButton.closest('.modal');
            modal.classList.remove('show');
        }
        
        // Si el clic no fue en un disparador Y no fue dentro de un modal activo
        if (!event.target.closest('[data-open-modal]') && 
            !event.target.closest('.modal') && 
            !event.target.closest('.note-card')) {
            closeAllModals();
        }
    });
}