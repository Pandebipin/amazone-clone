import "./Product";
import "./Product.css";
import { Link } from "react-router-dom";
import { addBucket } from "./store/bucketSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
function Product(props) {
  const dispatch = useDispatch();
  const buckethandler = () => {
    console.log("hey ");
    dispatch(
      addBucket({
        id: nanoid(),
        img: props.img,
        title: props.title,
        info: props.info,
        price: props.price,
        rating: props.rating,
      })
    );
  };
  return (
    <div className="product">
      <div className="product-info">
        <h3>{props.title}</h3>
      </div>
      <div className="product-image">
        <img src={props.img} alt="" />
      </div>
      <div className="info my-0">
        <p>{props.info}</p>
        <div className="flex mb-0">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}> ⭐</p>
            ))}
        </div>

        <h3>${props.price}</h3>
      </div>
      <div className="a my-2">
        <Link onClick={buckethandler}>shop now</Link>
      </div>
    </div>
  );
}

export default Product;
