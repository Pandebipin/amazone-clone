import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import "./Checkout.css";
import { getBasketTotal } from "./store/bucketSlice";
import { useNavigate } from "react-router-dom";

function SubtotalCalculator() {
  const navigate = useNavigate();
  const buckets = useSelector((state) => state.buckets);
  console.log(buckets);
  return (
    <div className="subtotal px-4 py-2 bg-white mx-3 position-sticy">
      <h3>Subtotal</h3>
      <div>
        <CurrencyFormat
          value={getBasketTotal(buckets)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
          renderText={(value) => (
            <div>
              <p>
                Subtotal ({buckets.length} items):
                <strong>{value}</strong>
              </p>
              <small>
                <input type="checkbox" id="" />
                this order contains a gift
              </small>
            </div>
          )}
        />
      </div>

      <button
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubtotalCalculator;
