import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import "./App.css";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    // sending state as sending request
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-a8a49-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      // sending state as request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent request to Database successfully",
          type: "success",
        })
      );
    };

    sendRequest().catch((err) =>
      // send state as an eror
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      )
    );
  }, [cart]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
