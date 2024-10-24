import { Link } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Notebook", precio: 150 },
  { id: 2, nombre: "Monitor", precio: 100 },
  { id: 3, nombre: "Auricular", precio: 50 },
];
function Productos() {
  return (
    <div>
      <h3>Productos</h3>
      {productos.map((producto) => (
        <Link to={`/detalle/${producto.id}`} key={producto.id}>
          {producto.nombre}
        </Link>
      ))}
    </div>
  );
}

export default Productos;
