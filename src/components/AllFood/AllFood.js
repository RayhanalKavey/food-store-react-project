import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./AllFood.css";
const AllFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  // const search=()=>{

  // }
  return (
    <div>
      <h1 className="text-5xl text-center my-5 ">
        Foods from different country
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center justify-items-center	m-8	">
        {foods.map((food) => (
          <Food food={food} key={food.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
