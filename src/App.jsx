import { useState } from "react";
import foods from "./foods.json";
import { Row, Divider, Button } from "antd";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { v4 as uuidv4 } from "uuid";

foods.forEach((item) => (item.id = uuidv4()));

function App() {
  const emptyArr = [];
  const [foodState, setFoodState] = useState(foods);
  const [query, setQuery] = useState("");
  const [deletedArr, setDeletedArr] = useState(emptyArr);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <div className="App">
      <div style={{ display: clicked ? "block" : "none" }}>
        <AddFoodForm
          clicked={clicked}
          foodState={foodState}
          setFoodState={setFoodState}
        />
      </div>
      <Button type="button" onClick={handleClick}>
        {clicked ? "Hide Form" : "Add new food"}
      </Button>
      <Search query={query} setQuery={setQuery} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodState
          .filter((food) => !deletedArr.includes(food.id))
          .filter((food) =>
            food.name.toLowerCase().startsWith(query.toLowerCase())
          )
          .map((food) => {
            return (
              <FoodBox
                key={food.id}
                food={food}
                deletedArr={deletedArr}
                setDeletedArr={setDeletedArr}
              />
            );
          })}
        <div
          style={{
            display: foodState.length === deletedArr.length ? "block" : "none",
          }}
        >
          <h4>Oops, there is no more content to display!</h4>
          <img
            src="https://static.thenounproject.com/png/300487-200.png"
            alt="no content"
          ></img>
        </div>
      </Row>
    </div>
  );
}

export default App;
