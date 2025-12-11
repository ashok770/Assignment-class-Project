import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="recipeCard"
      onClick={() => navigate(`recipe/${item.recipe_id}`)}
    >
      <img src={item.images[0]} alt={item.title} />

      <div className="card-info">
        <h3>{item.title}</h3>
        <p> {item.cook_time_minutes} mins</p>
      </div>
    </div>
  );
};

export default RecipeCard;
