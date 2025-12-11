import { useOutletContext } from "react-router-dom";
import "./../Styles/Home.css";
import RecipeCard from "../Component/RecipeCard";

const Home = () => {
  const { data } = useOutletContext();

  return (
    <div className="home">
      <h1 className="home-title">🍽 Trending Recipes</h1>

      <div className="recipe-list">
        {data.recipes.map((item) => (
          <RecipeCard key={item.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
