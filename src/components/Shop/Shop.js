import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Carts from "../Carts/Carts";
import "./Shop.css";
import { addToDb, getStorageCart } from "../../utilities/fakeDb";
const Shop = ({ search }) => {
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    // const fake = "data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [search]);
  ////load from local storage
  useEffect(() => {
    const getStoredCart = getStorageCart();
    const getOldCartForUI = [];
    // console.log(getStoredCart);
    for (const ID in getStoredCart) {
      // console.log(ID);
      const storedCart = foods.find((product) => product.idMeal === ID);
      if (storedCart) {
        const quantity = getStoredCart[ID];
        storedCart.quantity = quantity;
        getOldCartForUI.push(storedCart);
      }
    }
    setCarts(getOldCartForUI);
  }, [foods]);
  ////btn add to carts
  const btnAddToCart = (selectedFood) => {
    /////////vvi selected card display in the ui
    let quantity;
    let newCart;
    const exists = carts.find(
      (foodItem) => foodItem.idMeal === selectedFood.idMeal
    );
    if (exists) {
      const rests = carts.filter((food) => food.idMeal !== selectedFood.idMeal);
      selectedFood.quantity = selectedFood.quantity + 1;
      newCart = [...rests, selectedFood];
    } else {
      selectedFood.quantity = 1;
      newCart = [...carts, selectedFood];
    }
    addToDb(selectedFood.idMeal);
    setCarts(newCart);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        <div>
          <h1 className="text-5xl text-center my-5 ">
            Foods from different country
          </h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center justify-items-center	m-8	">
            {!foods ? (
              <div>No food found</div>
            ) : (
              foods.map((food) => (
                <Food
                  food={food}
                  key={food.idMeal}
                  btnAddToCart={btnAddToCart}
                ></Food>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="  bg-slate-300 sticky ">
        <h1 className="text-center font-bold my-5">Selected Food Items</h1>
        <div className="flex flex-col gap-4">
          {carts.map((cart) => (
            <Carts cart={cart} key={cart.idMeal}></Carts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
