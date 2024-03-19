import React from 'react'

const  RestaurantSignUp=()=> {
  return (
   
     <div>
      <h4> Signup  Components</h4>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter email id" className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter password" className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Comfirm password" className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter location " className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Your City " className="input-field"/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder=" Mobile Number" className="input-field"/>
        </div>
       
        <div className="input-wrapper" >
            <button className="button">Sign up</button>
        </div>
      </div>
    </div>
     
  
  )
}

export default RestaurantSignUp
