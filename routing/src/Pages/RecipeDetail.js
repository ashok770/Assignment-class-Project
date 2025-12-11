import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <h2>You are viewing recipe with ID: {recipeId}</h2>
    </div>
  );
};

export default RecipeDetail;
