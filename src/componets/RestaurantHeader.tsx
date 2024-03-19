import Link from 'next/link'
import React from 'react'

const RestaurantHeader=()=> {
  return (
    <div className='header-wrapper'>
        <div className='logo'>
          <img style={{width:100}} src="./download.jpeg" alt="" />
        </div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Login/SignUp</Link>
            </li>
            <li>
                <Link href="/">Profile</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default RestaurantHeader;
