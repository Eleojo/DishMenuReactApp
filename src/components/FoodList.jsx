import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div className="App">
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
