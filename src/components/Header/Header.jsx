import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import "./Header.css";

export default function Header() {
  const [formValue, setFormValue] = useState("");
  const [, setSearchParams] = useSearchParams();
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set("search", formValue);
    setSearchParams(searchParams);
  };

  const menuData = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Categorías", link: "/categories" },
    { id: 3, title: "Ofertas", link: "/offers" },
    { id: 4, title: "Contacto", link: "/contact" },
  ];

  const handleTheme = () => {
    setUser({
      ...user,
      isDarkMode: !user.isDarkMode,
    });
  };

  return (
    <header className={`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Link to="/">
        <h1 className={user.isLogged ? "logged-in-title" : ""}>MiTienda</h1>
      </Link>
      <nav>
        <ul className="nav-ul">
          {menuData.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar productos"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button className="header-btn" type="submit"></button>
      </form>
      <ul className="account-ul">
        <li>
          <Link to="/login">
            <User
              style={{ strokeWidth: 3 }}
              size={20}
              color={user.isLogged ? (user.isDarkMode ? "white" : "black") : (user.isDarkMode ? "white" : "black")}
            />
          </Link>
        </li>
        <li>
          <Heart size={20} />
        </li>
        <li onClick={handleTheme}>
          {!user.isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </li>
        <li className="notification-cicle-container">
          <Link to="/cart">
            <ShoppingCart size={20} />
          </Link>
          {user.shoppingCartItems.length !== 0 && (
            <span className="notification-cicle">
              {user.shoppingCartItems.length}
            </span>
          )}
        </li>
      </ul>
    </header>
  );
}
