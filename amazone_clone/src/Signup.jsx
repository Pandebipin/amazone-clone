import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState();
  const [fullname, setfulnsme] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in:", userCredential);
        if (userCredential) {
          // history.pushState("/")
          //history.push
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form>
          <div className="space-y-5 mx-4">
            <label htmlFor="full name">Fullname:</label>
            <input
              className="mx-2 p-1 px-2 "
              label="Full Name: "
              placeholder="Enter your full name"
              onChange={(e) => setfulnsme(e.target.value)}
              value={fullname}
            />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
              className="mx-2 p-1 px-3"
              label="Email: "
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              className="mx-2 p-1 px-2 "
              label="Password: "
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full" onClick={handleSubmit}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
