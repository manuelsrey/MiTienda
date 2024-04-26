import "./LoginForm.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import useForm from "../../Hooks/useForm";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const { form, setName, setEmail, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Por favor, rellena todos los campos");
      return;
    }

    const userEmail = form.email.trim();
    const role = userEmail.includes("@admin") ? "admin" : "user";

    setUser({
      ...user,
      ...form,
      isLogged: true,
      role,
    });
    reset();
    navigate(location.state?.pathname);
  };

  const handleLogoff = () => {
    setUser({
      ...user,
      isLogged: false,
      role: "user",
    });
    navigate("/");
  };

  return (
    <form onSubmit={user.isLogged ? handleLogoff : handleLogin} className="login-form">
      {!user.isLogged && (
        <>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      )}
      {user.isLogged ? <button>Cerrar sesión</button> : <button>Iniciar sesión</button>}
      {user.isLogged && <p>{`¿Quieres cerrar sesión, ${user.name}?`}</p>}
    </form>
  );
}
