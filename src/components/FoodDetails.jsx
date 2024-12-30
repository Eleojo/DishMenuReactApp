import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";
export default function FoodDetails({ foodIds }) {
  const [foodDetail, setFoodDetail] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodIds}/information`;
  const API_Key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);

      const data = await res.json();
      console.log(data);
      setFoodDetail(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodIds]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodDetail.title}</h1>

        <img className={styles.recipeImage} src={foodDetail.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕑{foodDetail.readyInMinutes} mins</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦Serves: {foodDetail.servings}</strong>
          </span>
          <span>
            <strong>
              {foodDetail.vegetarian ? "🥒Vegetarian" : "🥩Non Vegetarian"}
            </strong>
          </span>
          <span>{foodDetail.vegan ? "🐮Vegan" : ""}</span>
        </div>
        <div>
          <span>
            <strong>
              💲{(foodDetail.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>
        <h2 style={{ padding: "20px 0px" }}>Ingredients</h2>
        {isloading ? (
          <h3>Loading...</h3>
        ) : (
          <IngredientList foodDetail={foodDetail} />
        )}
        <h2 style={{ padding: "20px 0" }}>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isloading ? (
              <h3>Loading...</h3>
            ) : (
              foodDetail.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
