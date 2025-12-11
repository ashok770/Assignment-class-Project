import { useOutletContext } from "react-router-dom";
import RecipeCard from "../Component/RecipeCard";
import "./../Styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();

  if (!data || !data.recipes) {
    return <h2>Loading recipes...</h2>;
  }

  return (
    <div className="home">
      <h1 className="home-title">🍽 Trending Recipes</h1>

      <div className="recipe-list">
        {data.recipes.map((item) => (
          <RecipeCard key={item.recipe_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
