// src/Pages/RecipeDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  // 1. Get the route parameter from the URL
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. Use the parameter to fetch the specific data
    setLoading(true);
    // In a real application, you would make an API call here:
    // Example: fetch(`/api/recipes/${recipeId}`)

    // Simulating a data fetch delay
    setTimeout(() => {
      // Assume this data was fetched from your server/database
      const fetchedRecipe = {
        id: recipeId,
        title: `Recipe for ID: ${recipeId}`,
        ingredients: ["Ingredient A", "Ingredient B"],
        instructions: "Follow these steps...",
      };

      setRecipe(fetchedRecipe);
      setLoading(false);
    }, 500);
  }, [recipeId]); // Re-run effect when recipeId changes (e.g., navigating from /recipes/1 to /recipes/2)

  if (loading) {
    return <div>Loading recipe details...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  // 3. Render the dynamic content
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>ID from URL: **{recipeId}**</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
