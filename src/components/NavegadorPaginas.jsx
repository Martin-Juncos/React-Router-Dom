import { useNavigate } from "react-router-dom";

function NavegadorPaginas() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>◀</button>
      <button onClick={() => navigate(1)}>▶</button>
    </div>
  );
}

export default NavegadorPaginas;
