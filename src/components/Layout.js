import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import "./Layout.css";

const Layout = () => {
  let total = 0;
  const itemList = useSelector((state) => state.cart.itemList);
  const showCart = useSelector((state) => state.cart.showCart);

  itemList.forEach((item) => {
    total += item.price * item.quantity;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
