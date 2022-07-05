import React from 'react'
import Carts from './Carts'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar';




function ShoppingCart() {
  return (
    <div>
      <NavBar/>
      <h1 className='text-4xl font-semibold m-7 mt-14'>Shopping Cart</h1>
    <div className="grid gap-2 grid-cols-2 ml-10">
        <Carts />
        
      <Link to="/products">
        <button className='button-primary mt-16'>Back</button>
      </Link>
    </div>
    </div>
  );
}

export default ShoppingCart