import Ingredient from "./Ingredient";

export default function IngredientList({ foodDetail }) {
  return (
    <div>
      {foodDetail.extendedIngredients.map((ingredient) => (
        <Ingredient ingredient={ingredient} />
      ))}
    </div>
  );
}
