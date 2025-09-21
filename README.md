# Amauro Frontend

Dashboard de demandas legales que permita visualizar, buscar y filtrar casos legales de manera intuitiva.

## Tecnologías

- React + Vite
- Context API

## ✅ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- ✅ [*Git*](https://git-scm.com/)

## 📥 Obtener el proyecto

Clona el repositorio:

```bash
#Clona el repositorio
git clone https://github.com/jeisonrojasm/amauro.git
cd amauro
```

## 📁 Estructura del Proyecto

El frontend de Amauro está construido con React, y sigue una estructura modular y escalable. Se utiliza Vite como bundler, junto con buenas prácticas para facilitar el mantenimiento, pruebas y reutilización de componentes.

```bash
amauro/
├── public/                  # Archivos públicos (favicon, index.html)
├── src/                     # Código fuente del frontend
│   ├── components/          # Componentes reutilizables de UI
│   │   └── Button/          # Ejemplo de componente atómico
│   │       ├── Button.jsx
│   │       ├── Button.css
│   ├── context/             # Contextos globales (ej. autenticación, estado de usuario)
│   │   ├── DataContext.jsx
│   ├── hooks/               # Hooks personalizados reutilizables
│   │   └── useModal.js
│   ├── utils/               # Funciones utilitarias y esquemas
│   │   ├── functions.js
│   │   ├── queries.js        # Funciones que consumen la API del backend
│   ├── views/               # Vistas de páginas (agrupadas por ruta o flujo)
│   │   └── SignIn/
│   │       ├── SignIn.jsx
│   │       ├── SignIn.css
│   │       ├── SignInFunctions.js
│   ├── App.jsx              # Componente raíz de la app
│   ├── App.css              # Estilos globales de la app
│   ├── main.jsx             # Punto de entrada principal
│   └── index.css            # Estilos base/globales
├── .env                     # Variables de entorno para desarrollo (no versionado)
├── .gitignore               # Archivos y carpetas ignoradas por Git
├── index.html               # Archivo base HTML (usado por Vite)
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

### 🧱 Convenciones por módulo

Cada módulo en `views/` y `components/` sigue un patrón de separación por archivo para mantener una arquitectura limpia y escalable:

| Archivo           | Propósito                                                     |
|-------------------|---------------------------------------------------------------|
| `*.jsx`           | Componente principal (vista o UI reusable)                    |
| `*.css`           | Estilos específicos del componente o vista                    |
| `*Functions.js`   | Funciones auxiliares específicas del módulo                   |

## 🚀 Ejecutar

Este proyecto no requiere Docker ni archivos `.env`. Solo necesitas tener instalado Node.js (versión 18 o superior recomendada).

### 1. **Instala las dependencias**

```bash
npm install
```

### 2. Inicia la aplicación

```bash
npm run dev
```

## ✅ Aplicación lista para usarse

Podrás ver la aplicación en funcionamiento.

## 👨‍💻 Autor

Desarrollado por **Jeison Rojas** - *Desarrollador Fullstack* - [jeisonrojasm](https://github.com/jeisonrojasm)
