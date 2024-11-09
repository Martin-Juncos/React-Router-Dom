## Introducción a React Router v6

En esta clase, vamos a explorar la poderosa herramienta React Router v6, una biblioteca clave para el desarrollo de aplicaciones de una sola página (SPA) en React. Aprenderemos a implementar enrutamiento básico y avanzado, lo que nos permitirá mejorar la navegación y la experiencia del usuario en nuestras aplicaciones. Comenzaremos con una instalación y configuración básica, y luego avanzaremos hacia la creación de rutas, el manejo de errores, y la implementación de técnicas avanzadas como el lazy loading y la protección de rutas. Cada concepto se acompañará de ejemplos prácticos que refuercen tu aprendizaje y aplicación en proyectos reales.

React Router v6 facilita la creación de una navegación eficiente y organizada. En esta guía, aprenderemos a implementar React Router v6 en proyectos de React con ejemplos detallados, cubriendo desde los conceptos básicos hasta funcionalidades avanzadas que permitirán aprovechar al máximo esta herramienta. Profundizaremos en conceptos clave, explicaremos casos de uso específicos y exploraremos cómo optimizar la experiencia del usuario con técnicas avanzadas de enrutamiento.

## Conceptos Fundamentales de React Router

### Paso 1: Crear un Proyecto de React con Vite

Lo primero que haremos será crear un proyecto nuevo de React usando Vite. Vite es un build tool rápido y moderno que nos permite configurar una aplicación React de manera sencilla.

Ejecuta el siguiente comando para crear el proyecto:

```bash
npm create vite@latest mi-aplicacion-router
```

Selecciona React como el framework y sigue las instrucciones para instalar las dependencias.

### Paso 2: Instalar `react-router-dom`

Para trabajar con enrutamiento, necesitamos instalar la biblioteca `react-router-dom`, que proporciona todos los componentes y hooks necesarios para manejar rutas en nuestra aplicación.

Ejecuta el siguiente comando para instalarla:

```bash
npm install react-router-dom
```

### Paso 3: Envolver el Componente App.js con `<BrowserRouter>` en `index.js`

El siguiente paso es envolver el componente principal `App` con `<BrowserRouter>` en el archivo `index.js`. Esto es necesario porque `<BrowserRouter>` proporciona el contexto de enrutamiento que permite la navegación en nuestra aplicación.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

El `<BrowserRouter>` se encarga de manejar la historia de navegación de la aplicación, permitiendo que se navegue sin necesidad de recargar la página completa, mejorando la experiencia del usuario.

### Paso 4: Crear los Componentes Necesarios

A continuación, crearemos los componentes que usaremos para las rutas. Estos serán: `Home.jsx`, `Encabezado.jsx`, `Menu.jsx`, `Acerca.jsx`, `Detalle.jsx`, `Error404.jsx`.

Por ejemplo, para `Home.jsx`:

```jsx
function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página principal.</p>
    </div>
  );
}

export default Home;
```

Crea los demás componentes de manera similar, asegurándote de que tengan contenido básico para visualizar.

### Paso 5: Importar los Componentes en `App.js` y Envolver con `<Routes>`

En el archivo `App.js`, importa los componentes creados y configúralos con `<Routes>` y `<Route>`. Antes de React Router v6, se utilizaba `<Switch>`, pero este componente ha sido reemplazado por `<Routes>` para gestionar mejor la coincidencia de rutas.

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Acerca from './Acerca';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
```

### Paso 6: Manejo de Rutas 404

Para manejar errores cuando una página no existe, hemos incluido un `<Route>` con `path="*"` que mostrará el componente `Error404` cuando ninguna otra ruta coincida.

```jsx
<Route path="*" element={<Error404 />} />
```

Esto asegura que el usuario no vea una pantalla en blanco cuando ingrese una URL incorrecta.

### Paso 7: Crear el Componente `Menu.jsx` con `<a>` para Redireccionamiento

En el componente `Menu.jsx`, primero crearemos enlaces simples utilizando etiquetas `<a>` para redirigir a cada una de las rutas creadas.

```jsx
function Menu() {
  return (
    <nav>
      <a href="/">Inicio</a>
      <a href="/acerca">Acerca de</a>
    </nav>
  );
}

export default Menu;
```

Aquí estamos utilizando enlaces `<a>` que causarán una recarga completa del navegador al hacer clic. Esta no es la mejor manera de manejar la navegación en una SPA.

### Paso 8: Usar `<Link>` para Mejorar la Navegación

Ahora, reemplazaremos las etiquetas `<a>` con `<Link>` de `react-router-dom` para evitar la recarga completa de la página y mejorar la experiencia del usuario.

```jsx
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/acerca">Acerca de</Link>
    </nav>
  );
}

export default Menu;
```

El componente `<Link>` permite una navegación más fluida porque solo cambia la vista activa sin recargar toda la página.

### Paso 9: Utilizar `<NavLink>` con `isActive`

Finalmente, utilizaremos `<NavLink>` para crear enlaces que muestren el estado activo, lo cual es útil para indicar visualmente en qué página se encuentra el usuario.

```jsx
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'activo' : '')}>Inicio</NavLink>
      <NavLink to="/acerca" className={({ isActive }) => (isActive ? 'activo' : '')}>Acerca de</NavLink>
    </nav>
  );
}

export default Menu;
```

Aquí, `isActive` es una función que nos permite agregar una clase específica (`activo`) cuando la ruta coincide con la URL actual, mejorando la navegación visual.

### Rutas Anidadas y Outlet

Las rutas anidadas permiten crear jerarquías lógicas dentro de la aplicación. Para representar las rutas secundarias, se utiliza el componente `<Outlet>` en la ruta principal, permitiendo que la interfaz de usuario anidada se muestre cuando se acceden a rutas secundarias.

En este ejemplo, la ruta `/lista-producto/detalle` mostrará el componente `ListaProductos` dentro del contexto del componente `Detalle`, facilitando una estructura más clara y organizada. Las rutas anidadas son útiles para crear secciones de una aplicación que dependen jerárquicamente de una vista superior.

### Paso 10: Enrutamiento Dinámico - `useParams`

El enrutamiento dinámico permite que las rutas sean generadas con base en datos u otras condiciones. Esto es muy útil cuando el contenido cambia a menudo, como en un e-commerce donde los productos pueden variar.

```jsx
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const productos = [
  { id: 1, nombre: "Producto A" },
  { id: 2, nombre: "Producto B" },
];

function Producto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  return (
    <div>
      <h2>{producto?.nombre}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
```

En este ejemplo, las rutas se generan dinámicamente en base al contenido del array `productos`. Esto asegura que siempre se rendericen las páginas correctas de productos, haciendo que la aplicación sea flexible y dinámica.

### Paso 11: Enrutamiento Dinámico - `useParams`

El hook `useParams` es extremadamente útil para trabajar con rutas dinámicas. Nos permite extraer parámetros de la URL, lo cual es esencial para acceder a la información específica de un elemento, como detalles de un producto, un perfil de usuario, entre otros.

Por ejemplo, supongamos que queremos crear una página de

Made by Prof. Martin with a lot of 💖 and ☕



