import "./Footer.css";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <footer
      className={`footer-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="footer-details">
        <ul>
          <li>Contacto</li>
          <li>Email: info@mitienda.com</li>
          <li>Teléfono: +34 123 456 789</li>
        </ul>
        <ul>
          <li>Redes Sociales</li>
          <li>Facebook</li>
          <li>Twiter</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <li>Dirección</li>
          <li>Calle: Principal, 123</li>
          <li>Ciudad: País</li>
        </ul>
      </div>
      <p>© 2023 MiTienda. Todos los derechos reservados</p>
    </footer>
  );
}
