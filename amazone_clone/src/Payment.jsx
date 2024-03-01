import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./store/bucketSlice";
import { useState } from "react";
import "./payment.css";
import Component from "./khalti/Component";

function Payment() {
  const user = useSelector((state) => state.user);
  const buckets = useSelector((state) => state.buckets);
  console.log(buckets);
  console.log(user);
  const [error, seterror] = useState();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{buckets?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>name</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            <div className="w-4/4 p-4 ">
              <div className="flex flex-col">
                {buckets.map((bucket) => (
                  <div key={bucket.id} className="flex py-2 border-b">
                    <img
                      src={bucket.title.img}
                      alt={bucket.title.title}
                      className="w-30 h-30 object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-medium font-bold fs-15">
                        {bucket.info.info}
                      </h4>
                      <p className="text-gray-600">${bucket.price.price}</p>
                      <button
                        onClick={() => dispatch(removeBucket(bucket.id))}
                        className="text-blue-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section2">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <Component />

            <form>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(buckets)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button>
                  <span>buy</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
