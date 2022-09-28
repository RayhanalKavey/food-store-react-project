import React from "react";
import "./Food.css";

const Food = ({ food, btnAddToCart }) => {
  // console.log(food);
  const {
    strMeal,
    strInstructions,
    strTags,
    strArea,
    idMeal,
    strMealThumb,
    strSource,
    strYoutube,
  } = food;
  // md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
  return (
    <div className="card w-full  xl:w-80 bg-base-100 shadow-xl ">
      <figure>
        <img className="xl:w-80 xl:h-52" src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold text-2xl">{strMeal}</h2>
        <p>
          <span className="uppercase font-bold">ID:</span> {idMeal}
        </p>
        <p>
          <span className="uppercase font-bold">Procedure:</span>{" "}
          {strInstructions.slice(0, 100)}
        </p>
        <p>
          <span className="uppercase font-bold">Food Area:</span> {strArea}
        </p>
        <div className="flex gap-2">
          <button
            className="w-2/3 btn btn-primary"
            onClick={() => btnAddToCart(food)}
          >
            Add to cart
          </button>
          <button className="w-1/3 btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
