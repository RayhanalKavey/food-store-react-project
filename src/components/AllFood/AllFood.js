import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./AllFood.css";
const AllFood = () => {
  const [foods, setFoods] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div>
      <h1>This is all food</h1>
      {foods.map((food) => (
        <Food food={food} key={food.idMeal}></Food>
      ))}
    </div>
  );
};

export default AllFood;
