import React from "react";
import "../css/Checkout.css";
import checkoutAd from "../images/checkout-ad.png";
import CheckoutProduct from "./CheckoutProducts";
import { useStateValue } from "./../Context/StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <div className="checkout__product-container">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
