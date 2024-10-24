import { Route, Routes } from "react-router-dom";
import "./App.css";
import Acerca from "./components/Acerca";
import Detalle from "./components/Detalle";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error404 from "./components/Error404";
import Productos from "./components/Productos";
import Cursos from "./components/Cursos";
import CursoInicio from "./components/CursoInicio";
import CursoBakend from "./components/CursoBakend";
import CursoFrontend from "./components/CursoFrontend";
import CursoDatabase from "./components/CursoDatabase";
import NavegadorPaginas from "./components/NavegadorPaginas";
import PaginaActual from "./components/PaginaActual";

function App() {
  return (
    <>
      <NavegadorPaginas />
      <PaginaActual />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/cursos" element={<Cursos />}>
          <Route index element={<CursoInicio />} />
          <Route path="backend" element={<CursoBakend />} />
          <Route path="frontend" element={<CursoFrontend />} />
          <Route path="database" element={<CursoDatabase />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
