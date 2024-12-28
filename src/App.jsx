import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
