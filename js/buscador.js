// Implementación del buscador en la página
function inicializarBuscador() {
    const contenedorControles = document.getElementById("controles");
    if (!contenedorControles) return;

    // Evitar crear múltiples inputs si ya existe uno
    if (document.getElementById("buscador")) return;

    // Crear el campo de texto dentro de #controles
    const inputBuscador = document.createElement("input");
    inputBuscador.type = "text";
    inputBuscador.id = "buscador";
    inputBuscador.placeholder = "Buscar palabra o descripción...";

    // Al escribir, actualizar filtros.texto y aplicar los filtros
    inputBuscador.addEventListener("input", (evento) => {
        filtros.texto = evento.target.value;
        aplicarFiltros();
    });

    contenedorControles.appendChild(inputBuscador);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarBuscador);
} else {
    inicializarBuscador();
}
