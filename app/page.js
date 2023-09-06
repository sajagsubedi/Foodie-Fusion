import { Hero, RecipeItem } from "@/components";
import { Link } from "next/link";
import { RecipeCarousel } from "@/styles/ComponentStyles";
async function Home() {
  let url =
    "https://api.spoonacular.com/recipes/random?apiKey=3ca61df6115c4e5a88ff46ef66e7d657&number=10";
  let trendingRecipes = await fetch(url);
  trendingRecipes = await trendingRecipes.json();
  return (
    <main>
      <Hero />
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,176C672,160,768,128,864,112C960,96,1056,96,1152,112C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="colouredBox"></div>
      <div className="sectionDivider"></div>
      <h1 className="sectionHeading">Trending Recipes</h1>
      <RecipeCarousel>
        <div className="carrousel">
          {!!trendingRecipes.recipes &&
            trendingRecipes.recipes.map((data, i) => {
              return (
                <div key={i} className="RecipeCard">
                  <div className="recipeImg">
                    <img src={data.image} alt="loading" />
                  </div>
                  <div className="recipeBody">
                    <p>{data.title}</p>
                      <a
                      className="btn PrimaryBtn"
                      href={`/recipe/${data.id}`}
                    >
                      View Recipe
                    </a>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </RecipeCarousel>
    </main>
  );
}

export default Home;
