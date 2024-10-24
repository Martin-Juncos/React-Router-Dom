import { useMatch } from "react-router-dom";

function VerificarRuta({ id }) {
  const match = useMatch(`/detalle/${id}`);

  return (
    <div>{match ? "El producto fue encontrado" : "No se encontro nada"}</div>
  );
}

export default VerificarRuta;
