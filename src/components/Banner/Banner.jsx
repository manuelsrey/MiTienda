import "./Banner.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Promotion() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const route = location.pathname.split("/")[1];

  let message;

  if (user.isLogged && route === "") {
    message = `${user.name}, ¡aprovéchate de tu 20% de descuento!`;
  } else if (!user.isLogged && route === "login") {
    message = "Inicia sesión para disfrutar de nuestros descuentos.";
  } else if (user.isLogged && route === "cart") {
    message = `${user.name}, los 20% se aplicarán al final de la compra.`;
  } else {
    message = "¡20% de descuento para nuevos clientes!";
  }

  return (
    <div className="banner">
      <p>{message}</p>
    </div>
  );
}
