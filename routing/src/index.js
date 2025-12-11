import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Categories from "./Pages/Categories";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import RecipeDetail from "./Pages/RecipeDetail";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/recipes/:recipeId", element: <RecipeDetail /> },
      { path: "/categories", element: <Categories /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <h2>Page Not Found</h2> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
