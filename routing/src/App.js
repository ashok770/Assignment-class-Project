import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <h1>CookMate</h1>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
