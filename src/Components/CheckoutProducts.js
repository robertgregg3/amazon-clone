import React from "react";
import { useStateValue } from "./../Context/StateProvider";
import "../css/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__product">
      <img src={image} alt="" className="checkout__product-image" />
      <div className="ccheckout__product-info">
        <p className="checkout__product-title">{title}</p>
        <p className="checkout__product-price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="amazon-standard-button">
            Remove From Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
