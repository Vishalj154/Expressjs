import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Productify</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar