# 🐘 PHP Words

[![PHP Version](https://img.shields.io/badge/PHP-8.x%20Keywords-777bb4?logo=php&logoColor=white)](https://www.php.net/manual/es/reserved.keywords.php)
[![Version](https://img.shields.io/badge/version-0.4.0-d4af37)](#)
[![No Dependencies](https://img.shields.io/badge/dependencies-vanilla_JS-brightgreen)](#)
[![Theme](https://img.shields.io/badge/theme-dark_gold-black)](#)

**PHP Words** es una aplicación web interactiva, moderna y ultraligera para consultar, aprender y buscar las **palabras reservadas** y estructuras clave del lenguaje **PHP**. Permite realizar búsquedas y filtrados en tiempo real por término o categoría sin requerir servidores ni dependencias externas.

---

## ✨ Características Principales

- 🔍 **Buscador en tiempo real:** Filtra simultáneamente por el nombre de la palabra reservada y por su descripción.
- 🏷️ **Filtro por Categorías:** Clasificación dinámica por tipos de constructos: *clases*, *control*, *funciones*, *excepciones* y *otros*.
- 🎨 **Diseño Moderno & Elegante:** Interfaz oscura (*dark mode*) con acentos dorados, etiquetas semánticas con código de colores según categoría y fuentes optimizadas (*JetBrains Mono* & *Outfit*).
- ⚡ **Sin Dependencias (Vanilla):** Funciona al 100% en el cliente con HTML5, CSS3 y JavaScript nativo. Cero configuración, carga instantánea.
- 📱 **Totalmente Responsivo:** Adaptado a pantallas de móviles, tablets y escritorio.

---

## 🆕 Nuevas Palabras Reservadas Añadidas

Se han incorporado 5 palabras clave esenciales de la sintaxis moderna de PHP:

| Palabra | Categoría | Descripción |
|---|---|---|
| `enum` | **clases** | Define una enumeración con un conjunto cerrado de valores posibles (PHP 8.1+). |
| `fn` | **funciones** | Define funciones flecha anónimas (*arrow functions*) con captura automática de variables por valor (PHP 7.4+). |
| `match` | **control** | Estructura condicional de evaluación estricta por coincidencia de expresiones con retorno directo de valor (PHP 8.0+). |
| `readonly` | **clases** | Modificador para propiedades o clases que impide su mutación tras la inicialización (PHP 8.1+). |
| `trait` | **clases** | Mecanismo para la reutilización horizontal de métodos y atributos entre jerarquías de clases. |

---

## 📂 Estructura del Proyecto

```plaintext
php-words/
├── index.html        # Página principal y estructura base
├── README.md         # Documentación del proyecto
├── css/
│   └── estilos.css   # Estilos de la aplicación (paleta de colores, componentes y responsive)
└── js/
    ├── app.js        # Lógica central de filtrado y renderizado
    ├── buscador.js   # Inicialización y eventos del campo de búsqueda
    ├── categorias.js # Generación dinámica del selector de categorías
    ├── config.js     # Metadatos de la aplicación (título, subtítulo, versión)
    └── palabras.js   # Colección de palabras reservadas y sus descripciones
```

---

## 🚀 Cómo Ejecutar el Proyecto

No se necesita instalar ningún entorno de ejecución (`Node.js`, `Composer`, etc.) ni servidor web.

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/php-words-mulerito.git
   ```
2. Abre directamente el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge, etc.):
   - Puedes hacer **doble clic** sobre `index.html`.
   - O bien utilizar una extensión de servidor local como *Live Server* en Visual Studio Code.

---

## 🤝 Cómo Contribuir o Añadir Palabras

Para agregar nuevas palabras reservadas o modificar descripciones existentes:

1. Abre el archivo [`js/palabras.js`](file:///f:/2%20DAW/DEAW/Fork%20mulero/php-words-mulerito/js/palabras.js).
2. Añade un nuevo objeto al array `PALABRAS` siguiendo la siguiente estructura:
   ```javascript
   {
       palabra: "nombre_palabra",
       categoria: "clases" | "control" | "funciones" | "excepciones" | "otros",
       descripcion: "Breve explicación de la función o sintaxis."
   }
   ```
3. Guarda el archivo y recarga `index.html` en tu navegador. ¡El buscador y el filtro de categorías lo detectarán automáticamente!

---

## 📄 Licencia

Este proyecto está disponible para fines educativos y de consulta libre.
