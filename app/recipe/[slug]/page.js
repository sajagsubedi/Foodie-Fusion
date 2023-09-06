import { RecipePage, Instructions } from "@/styles/ComponentStyles";
export default async function Page({ params }) {
  let url = `https://api.spoonacular.com/recipes/${params.slug}/information?apiKey=3ca61df6115c4e5a88ff46ef66e7d657`;
  let resp = await fetch(url);
  resp = await resp.json();
 return (
    <RecipePage>
          <h2 className="recipeTitle">{resp.title}</h2>
          <img className="recipeImage" src={resp.image} />
          <Instructions>
            <h3>Instructions:</h3>
            <div
              className="instructionsBody"
              dangerouslySetInnerHTML={{ __html: resp.instructions }}
            />
          </Instructions>
          <div className="summary">
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: resp.summary }} />
          </div>
    </RecipePage>
  );
}
