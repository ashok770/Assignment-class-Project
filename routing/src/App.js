import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchRecipesdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/Recipies.json");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipesdata();
  }, []);
  console.log(data);

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
          <NavLink to="/About">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet context={{ data }} />
      </main>
    </div>
  );
}

export default App;
