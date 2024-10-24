import { useParams } from "react-router-dom";
// import VerificarRuta from "./VerificarRuta";

const productos = [
  { id: 1, nombre: "Notebook", precio: 150 },
  { id: 2, nombre: "Monitor", precio: 100 },
  { id: 3, nombre: "Auricular", precio: 50 },
];
function Detalle() {
  const { id } = useParams();
  const producto = productos.find((product) => product.id === parseInt(id));
  return (
    <div>
      {/* <VerificarRuta id={id} /> */}
      <h2>Detalle</h2>
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
    </div>
  );
}

export default Detalle;
