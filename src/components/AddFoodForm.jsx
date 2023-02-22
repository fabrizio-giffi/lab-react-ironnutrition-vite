import { Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Iteration 4
function AddFoodForm({foodState, setFoodState}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState(1);

    const handleSubmit = event => {
        event.preventDefault()
        const newFood = {name, image, calories, servings, id: uuidv4()}
        setFoodState([newFood, ...foodState])
        setName("")
        setImage("")
        setCalories("")
        setServings(1)
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>
        Name
        <Input value={name} type="text" placeholder="Pizza" onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Image
        <Input value={image} type="text" placeholder="image URL" onChange={event => setImage(event.target.value)} />
      </label>
      <label>
        Calories
        <Input value={calories} type="number" placeholder="100" onChange={event => setCalories(event.target.value)} />
      </label>
      <label>
        Servings
        <Input value={servings} type="number" onChange={event => setServings(event.target.value)} />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
