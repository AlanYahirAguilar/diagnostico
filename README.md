# Diagnóstico Práctico - Tienda Web

Este proyecto es la solución al examen diagnóstico práctico. Consiste en una aplicación web tipo tienda (Single Page Application - SPA) con diseño 100% responsivo (Móvil y Escritorio), construida utilizando HTML5, CSS3, JavaScript puro y Bootstrap 5 (vía CDN con fallback local).

## 🚀 Cómo ejecutar el proyecto

Dado que el proyecto es estático y no requiere compilación, ejecutarlo es muy sencillo:

1. Clona este repositorio en tu computadora.
2. Puedes abrir el archivo `index.html` **directamente en tu navegador web** dando doble clic.
3. *(Opcional pero recomendado)*: Utiliza la extensión **Live Server** de VS Code o cualquier servidor local estático para una mejor experiencia al probar el enrutamiento dinámico de la SPA.

## 📋 Resumen de Evaluación

- **Patrón de Diseño (Punto Extra):** El proyecto implementa la arquitectura **MVC (Modelo-Vista-Controlador)** en `src/js/` (`HomeModel`, `HomeView`, `HomeController`) para separar la lógica, la interfaz y los datos de manera estructurada.
- **Metodología Git:** El desarrollo se llevó a cabo utilizando un flujo de ramas estructurado. Se usaron ramas tipo `feature/` y `fix/` unidas hacia `develop` antes de ir a `main`. Todo esto es visible en la gráfica de Insights/Network del repositorio.
- **Responsividad:** Adaptación perfecta entre mockups de web y celular apoyada completamente por las utilidades de cuadrícula y display de Bootstrap.