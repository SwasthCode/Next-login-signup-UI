"use client";
import React, { useState } from "react";

import "./style.css";

// import RestaurantLogin from "@/componets/restaurantLogin";
import RestaurantSignUp from "@/componets/RestaurantSignUp";
import RestaurantLogin from "@/componets/RestaurantLogin";

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1> Login/signup page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login ? "do not have account? " : "Already have Account SignUp?"}
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
