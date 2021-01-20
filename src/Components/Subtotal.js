import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../Context/StateProvider";
import { getBasketTotal } from "../Context/Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item{basket.length === 1 ? "" : "s"}):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button
        className="amazon-standard-button"
        onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
