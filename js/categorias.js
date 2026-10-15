// Implementación del filtro por categoría
function inicializarCategorias() {
    const contenedorControles = document.getElementById("controles");
    if (!contenedorControles) return;

    // Evitar crear múltiples select si ya existe uno
    if (document.getElementById("categorias")) return;

    // Crear el elemento desplegable
    const selectCategorias = document.createElement("select");
    selectCategorias.id = "categorias";

    // Estilos básicos para integrarse con el diseño oscuro de la página
    selectCategorias.style.padding = "0.6rem 0.8rem";
    selectCategorias.style.backgroundColor = "var(--color-fondo, #121212)";
    selectCategorias.style.border = "1px solid var(--color-borde, #333333)";
    selectCategorias.style.borderRadius = "6px";
    selectCategorias.style.color = "var(--color-texto, #e0e0e0)";
    selectCategorias.style.fontSize = "1rem";
    selectCategorias.style.cursor = "pointer";
    selectCategorias.style.outline = "none";

    // Opción inicial "todas"
    const opcionTodas = document.createElement("option");
    opcionTodas.value = "todas";
    opcionTodas.textContent = "Todas";
    selectCategorias.appendChild(opcionTodas);

    // Obtener las categorías únicas existentes en PALABRAS
    if (typeof PALABRAS !== "undefined" && Array.isArray(PALABRAS)) {
        const categoriasUnicas = [...new Set(PALABRAS.map(item => item.categoria).filter(Boolean))].sort();

        categoriasUnicas.forEach((categoria) => {
            const opcion = document.createElement("option");
            opcion.value = categoria;
            opcion.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
            selectCategorias.appendChild(opcion);
        });
    }

    // Al cambiar la selección, actualizar filtros.categoria y llamar a aplicarFiltros()
    selectCategorias.addEventListener("change", (evento) => {
        filtros.categoria = evento.target.value;
        aplicarFiltros();
    });

    contenedorControles.appendChild(selectCategorias);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarCategorias);
} else {
    inicializarCategorias();
}
