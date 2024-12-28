import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import SearchBar from "./components/SeachBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />

      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
