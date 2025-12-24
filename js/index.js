document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('note-container');
    const notes = JSON.parse(localStorage.getItem('my-notes')) || [];

    if (notes.length === 0) {
        container.innerHTML = '<p>There are no saved notes yet.</p>'
        return;
    }

    container.innerHTML = '';
    notes.forEach(noteData => {
        const card = document.createElement('div');
        card.classList.add('note-card');

        card.innerHTML = `
            <img src="assets/bitmap.png" class="icon-note" alt="icon note">
            <h3>${noteData.title}</h3>
        `;

        card.addEventListener('click', () => {
            window.location.href = `spacework.html?id=${noteData.id}`;
        });
        container.appendChild(card);
    });
})