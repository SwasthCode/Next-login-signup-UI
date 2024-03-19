import React from "react";

const RestaurantLogin = () => {
  return (
    <div>
      <h4> Login</h4>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="enter email id" className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="enter password" className="input-field"/>
        </div>
        <div className="input-wrapper" >
            <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin
