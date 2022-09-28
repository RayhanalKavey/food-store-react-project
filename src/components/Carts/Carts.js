import React from "react";
import "./Carts.css";
const Carts = ({ cart }) => {
  // console.log(cart);
  const { idMeal, strMeal, strTags, strMealThumb, quantity } = cart;

  return (
    <div>
      <div>
        {/* <h1>{cart.strMeal}</h1> */}

        <div className="card w-[90%]  mx-auto bg-base-100 shadow-xl image-full ">
          <figure>
            <img className="h-[56px] " src={strMealThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {strTags ? strTags : "No data found."}!
            </h2>
            <p>ID: {idMeal}</p>
            <p>Quantity:{quantity} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
