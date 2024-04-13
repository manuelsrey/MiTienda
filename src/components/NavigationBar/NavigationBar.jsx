import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login">Login</Link>
        </nav>
    )
}

export default NavigationBar;