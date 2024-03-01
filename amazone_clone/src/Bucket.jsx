import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";

function Checkout() {
  const buckets = useSelector((state) => state.buckets);
  console.log(buckets);
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="left">
          {buckets.map((bucket) => (
            <div className="img-box" key={bucket.id}>
              <img
                className=" "
                src={bucket.title.img}
                alt={bucket.title.title}
              />
              <div className="title text-black" key={bucket.id}>
                <h2>{bucket.title.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
