import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { CategorieId } = useParams();

  return (
    <div>
      <h1>Categories Page</h1>
      <h2>You are viewing categorie with ID: {CategorieId}</h2>
    </div>
  );
};
export default Categories;
