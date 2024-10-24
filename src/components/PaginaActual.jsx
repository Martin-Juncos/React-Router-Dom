import { useLocation } from "react-router-dom";

function PaginaActual() {
  const { pathname } = useLocation();
  return (
    <div>
      <p>Usted esta en {pathname}</p>
    </div>
  );
}

export default PaginaActual;
