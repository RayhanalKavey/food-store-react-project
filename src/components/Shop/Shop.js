import React from "react";
import AllFood from "../AllFood/AllFood";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        <AllFood></AllFood>
      </div>
      <div className="h-screen sticky top-16  bg-slate-300">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
