/*Funcion para los eventos de cada modal */
export function initModalEvents() {
    // Abrir modal
    if (document) {
        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('[data-open-modal]');

            if (trigger) {
                const modalId = trigger.dataset.openModal; // ID del modal para crear notas o folders
                const modal = document.getElementById(modalId);

                if (modal) {
                    const rect = trigger.getBoundingClientRect();
                    modal.style.top = `${rect.top + 20}px`;
                    modal.style.left = `${rect.left + rect.width + 20}px`;

                    modal.classList.add('show');
                }
            }
        });
    }
    
    // Abrir modal con clic derecho
    const fileContainer = document.getElementById('files');

    if (fileContainer) {
        fileContainer.addEventListener('contextmenu', (event) => {
            const note = event.target.closest('.note-card');
            const modalOptions = document.getElementById('container-note-options');

            event.preventDefault();

            if (note && modalOptions) {
                const rect = note.getBoundingClientRect();
                modalOptions.style.top = `${rect.top + 20}px`;
                modalOptions.style.left = `${rect.left + rect.width + 20}px`;
                    
                modalOptions.classList.add('show');
            }
        });
    }

    // Cerrar modal
    document.addEventListener('click', (event) => {
        const closeButtons = event.target.closest('.icon-close');

        if (closeButtons) {
            const modal = closeButtons.closest('.modal');

            modal.classList.remove('show');
        }
    });
}