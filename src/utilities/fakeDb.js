const getStorageCart = () => {
  let foodCart = {};
  const storedCart = localStorage.getItem("food-cart");
  if (storedCart) {
    foodCart = JSON.parse(storedCart);
  }
  return foodCart;
};

const addToDb = (ID) => {
  let foodCart = getStorageCart();
  if (foodCart[ID]) {
    foodCart[ID] = foodCart[ID] + 1;
  } else {
    foodCart[ID] = 1;
  }

  localStorage.setItem("food-cart", JSON.stringify(foodCart));
};

const removeFromDb = () => {};
export { getStorageCart, addToDb };
