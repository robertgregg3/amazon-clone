import React from "react";
import "../css/Checkout.css";
import checkoutAd from "../images/checkout-ad.png";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
