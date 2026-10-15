// Variable global de filtros requerida
let filtros = { texto: "", categoria: "todas" };

// Función que aplica los filtros y actualiza la interfaz
function aplicarFiltros() {
    const listaElemento = document.getElementById("lista");
    const contadorElemento = document.getElementById("contador");

    // Filtrar el array global PALABRAS
    const palabrasFiltradas = PALABRAS.filter(item => {
        const coincideTexto = item.palabra.toLowerCase().includes(filtros.texto.toLowerCase()) ||
                              item.descripcion.toLowerCase().includes(filtros.texto.toLowerCase());
        const coincideCategoria = filtros.categoria === "todas" || item.categoria === filtros.categoria;
        return coincideTexto && coincideCategoria;
    });

    // Actualizar el contador
    contadorElemento.textContent = `Mostrando ${palabrasFiltradas.length} de ${PALABRAS.length} palabras`;

    // Renderizar la lista en pantalla
    listaElemento.innerHTML = "";
    
    if (palabrasFiltradas.length === 0) {
        listaElemento.innerHTML = "<li><p class='palabra-descripcion'>No se encontraron resultados para tu búsqueda.</p></li>";
        return;
    }

    palabrasFiltradas.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="palabra-titulo">${item.palabra}</div>
            <span class="palabra-categoria">${item.categoria}</span>
            <p class="palabra-descripcion">${item.descripcion}</p>
        `;
        listaElemento.appendChild(li);
    });
}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Rellenar cabecera desde config.js
    document.getElementById("titulo").textContent = APP_TITULO;
    document.getElementById("subtitulo").textContent = APP_SUBTITULO;
    document.getElementById("version").textContent = APP_VERSION;

    // Ejecutar filtro inicial para mostrar todo
    aplicarFiltros();
});