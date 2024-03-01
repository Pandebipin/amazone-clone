import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import ShoppingBasket from "./ShoppingBasket";

function Checkout() {
  return (
    <div className="checkout">
      <div className="left">
        <ShoppingBasket />
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
