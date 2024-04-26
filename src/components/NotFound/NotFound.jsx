import { Link } from "react-router-dom";
import "./NotFound.css";

export default function Error() {
  return (
    <div className="page-not-found">
      <h1>404 Not Found</h1>
      <p>Página no encontrada</p>
      <Link
        className="error"
        to="/"
      >
        Volver a la página principal
      </Link>
    </div>
  );
}
