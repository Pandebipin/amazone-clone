import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import Button from "react-bootstrap/Button";
import ShoppinBasketIcon from "@mui/icons-material/shoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const handlesubmit = () => {
    if (user) {
      auth.signOut();
    }
  };
  const user = useSelector((state) => state.user);
  console.log(user);
  const buckets = useSelector((state) => state.buckets);
  console.log(buckets);
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
          alt="logo"
          className="header_logo w-35 h-6 "
        />
      </Link>
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handlesubmit}>
            <span className="first_line">Hello {user ? "user" : "dummy"}</span>
            <span className="first_two">{user ? "sign Out" : "sigin in"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="first_line">Returns</span>
          <span className="first_two">& orders</span>
        </div>
        <div className="shopping-cart">
          <Link to={"/checkout"}>
            <ShoppinBasketIcon />
          </Link>
          <span className="basket-count">{buckets.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
