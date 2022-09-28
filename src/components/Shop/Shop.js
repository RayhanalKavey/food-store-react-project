import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  ////btn add to cart
  const btnAddToCart = (selectedFood) => {
    console.log(foods);
    console.log("Clicked", selectedFood);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        <div>
          <h1 className="text-5xl text-center my-5 ">
            Foods from different country
          </h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center justify-items-center	m-8	">
            {foods.map((food) => (
              <Food
                food={food}
                key={food.idMeal}
                btnAddToCart={btnAddToCart}
              ></Food>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-slate-300">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
