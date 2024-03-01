import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBucket } from "./store/bucketSlice";
const ShoppingBasket = () => {
  const buckets = useSelector((state) => state.buckets);
  console.log(buckets);
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <div className="w-3/4 p-4 ">
        <h2 className="text-2xl font-bold mb-4">Shopping Basket</h2> <hr />
        <div className="flex flex-col ">
          {buckets.map((bucket) => (
            <div key={bucket.id} className="flex items-center py-2 border-b">
              <img
                src={bucket.title.img}
                alt={bucket.title.title}
                className="w-30 h-40 object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">{bucket.info.info}</h4>
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
  );
};

export default ShoppingBasket;
