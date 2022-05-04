import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => {
          const { name, price, quantity, id, totalPrice } = item;
          return (
            <li key={id}>
              <CartItem
                id={id}
                price={price}
                name={name}
                quantity={quantity}
                total={totalPrice}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
