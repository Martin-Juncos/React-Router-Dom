import { Link, Outlet } from "react-router-dom";

function Cursos() {
  return (
    <div>
      <h2>Cursos</h2>
      <nav>
        <Link to="/cursos">Inicio</Link>
        <Link to="/cursos/backend">backend</Link>
        <Link to="/cursos/frontend">frontend</Link>
        <Link to="/cursos/database">database</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Cursos;
