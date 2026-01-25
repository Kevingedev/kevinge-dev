# Especificaciones de Diseño y Estructura: Kevin Ruiz Portfolio

Este documento define la identidad visual y técnica para replicar la interfaz de usuario, ahora personalizada con una temática de alto contraste en tonos rojos.

---

## 1. Paleta de Colores (Esquema Dark & Red)

| Elemento | Código/Valor | Notas |
| :--- | :--- | :--- |
| **Fondo Principal** | `#050000` o `#0a0101` | Negro profundo con un matiz cálido/rojizo. |
| **Acento Primario** | `#ef4444` o `#dc2626` | Rojo vibrante (Tailwind Red-500/600). |
| **Glow de Fondo** | Radial Gradients | Resplandores sutiles en vino (`#450a0a`) y granate. |
| **Texto Principal** | `#ffffff` | Blanco puro para títulos. |
| **Texto Secundario** | `#fca5a5` o `#94a3b8` | Rosa pálido muy sutil o gris para descripciones. |
| **Bordes/Divisores** | `rgba(239, 68, 68, 0.1)` | Rojo con opacidad muy baja. |

---

## 2. Tipografía y Personalización

* **Nombre de Marca:** **Kevin Ruiz** (sustituyendo Alex.dev).
* **Fuente Principal:** Sans-Serif geométrica (Recomendadas: `Inter`, `Geist Sans`, o `Plus Jakarta Sans`).
* **Títulos (Hero):** * `font-weight: 800` (Extra Bold).
    * `font-size: 4rem`.
    * Color: Blanco con posible énfasis en palabras clave en **Rojo Primario**.
* **Cuerpo:** Regular (400), alineación centrada en Hero y justificada a la izquierda en cards.

---

## 3. Componentes de la Interfaz (UI)

### Navegación (Navbar)
* **Logo:** Texto `Kevin.dev` o `KR` con icono `< >` en rojo.
* **Botón "Hire Me":** Fondo rojo sólido (`#ef4444`), texto blanco, bordes tipo *Pill*.
* **Efecto:** Glassmorphism con un tinte rojizo muy leve en el desenfoque.

### Botones (Hero)
* **Primario (See My Work):** Fondo rojo vibrante, icono de flecha blanca.
* **Secundario (Contact Me):** Borde rojo oscuro o gris, efecto hover que tiñe el fondo de rojo translúcido.

### Tarjetas de Proyecto (Cards)
* **Border Radius:** `24px`.
* **Overlay:** Al hacer hover, un sutil degradado rojo desde la base de la tarjeta.
* **Tags:** Fondo rojo muy oscuro (`#450a0a`), texto rojo claro (`#fca5a5`).

---

## 4. Efectos Visuales Especiales

* **Indicador de Disponibilidad:** Punto **rojo neón** o **verde esmeralda** (para contraste) con pulso animado.
* **Sombra de Acento:** Las imágenes de los proyectos pueden tener un `drop-shadow` de color rojo tenue.
* **Trusted Technologies:** Logos en escala de grises que cambian a su color original o a rojo al pasar el cursor.

---

## 5. Estructura de Diseño (Layout)

* **Contenedor:** Ancho máximo de `1200px`.
* **Sección de Proyectos:** Grid de 3 columnas (Desktop).
* **Footer:** * Izquierda: `Kevin Ruiz © 2024`.
    * Derecha: Iconos sociales con hover en rojo.

---

## 6. Stack Tecnológico Recomendado

* **Framework:** Next.js.
* **Estilos:** Tailwind CSS.
* **Iconos:** Lucide React (ej. `Code2`, `ExternalLink`, `ArrowDown`).
* **Animaciones:** Framer Motion para entradas suaves de los elementos.

---

> **Nota de Estilo:** Al cambiar a rojo, es vital no saturar. Mantén el fondo casi negro y usa el rojo solo para elementos de interacción y énfasis visual. Esto mantendrá la elegancia y evitará la fatiga visual.