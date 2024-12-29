import { useEffect, useState } from "react";

export default function FoodDetails({ foodIds }) {
  const [foodDetail, setFoodDetail] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodIds}/information`;
  const API_Key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);

      const data = await res.json();
      console.log(data);
      setFoodDetail(data);
    }
    fetchFood();
  }, [foodIds]);

  return (
    <div>
      {foodIds} {foodDetail.title}
      <img src={foodDetail.image} alt="" />
    </div>
  );
}
