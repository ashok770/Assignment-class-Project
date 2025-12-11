import { useOutletContext } from "react-router-dom";
import "./../Styles/Home.css";
import RecipeCard from "../Component/RecipeCard";

const Home = () => {
  const { data } = useOutletContext();

  return (
    <div className="home">
      {/* ================= Banner Section ================= */}
      <section
        className="banner"
        style={{
          backgroundImage: "url('/images/banner-bg.jpg')",
        }}
      >
        <div className="banner-content">
          <h1>Discover Your Next Favorite Recipe</h1>
          <p>Explore delicious meals crafted for every occasion</p>

          <button className="explore-btn">Explore Recipes</button>
        </div>
      </section>

      {/* ================= Trending Section ================= */}
      <h2 className="section-title">🍽 Trending Recipes</h2>

      <div className="recipe-list">
        {data.recipes?.map((item) => (
          <RecipeCard key={item.recipe_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
