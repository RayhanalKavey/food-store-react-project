import React from "react";
import "./Food.css";
const Food = ({ food }) => {
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
  return (
    <div className="card w-72 bg-base-100 shadow-xl ">
      <figure>
        <img className="w-80 h-52" src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold text-2xl">{strMeal}</h2>
        <p>
          <span className="uppercase font-bold">Procedure:</span>{" "}
          {strInstructions.slice(0, 100)}
        </p>
        <p>
          <span className="uppercase font-bold">Food Area:</span> {strArea}
        </p>
        <div className="flex justify-between">
          <button className="btn btn-primary">Add to cart</button>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
