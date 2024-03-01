import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { auth } from "./firebase.js";
import { login, logout } from "./store/bucketSlice.js";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const [loader, setloader] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      console.log(authuser);
      if (authuser) {
        dispatch(
          login({
            authuser,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  useEffect(() => {
    setloader(false);
  }, []);
  return !loader ? (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  ) : (
    <div className="flex justify-center font-bold mt-2">...loading</div>
  );
}

export default App;
