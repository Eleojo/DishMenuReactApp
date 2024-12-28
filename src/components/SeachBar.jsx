import { useEffect, useState } from "react";
import styles from "./searchbar.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_Key = process.env.REACT_APP_API_KEY;

export default function SearchBar({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
