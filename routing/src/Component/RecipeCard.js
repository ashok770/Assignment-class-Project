import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="recipeCard"
      onClick={() => navigate(`recipe/${item.info.id}`)}
    >
      <img src={item.info.image} alt={item.info.name} />

      <div className="card-info">
        <h3>{item.info.name}</h3>
        <p>⏱ {item.info.cookTime} mins</p>
      </div>
    </div>
  );
};

export default RecipeCard;
