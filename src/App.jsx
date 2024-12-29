import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodIds, setFoodId] = useState("680975");

  return (
    <div>
      <Nav />

      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodId={setFoodId}
            foodIds={foodIds}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodIds={foodIds} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
