export async function loadComponent (id, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        const container = document.getElementById(id);

        if (container) {
            container.innerHTML = html;
            return true; 
        }
    } catch (error) {
        console.error(`Error cargando componente ${path}:`, error);
    }
}