
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <ul>
                <Link to="/"> <li>Fill Data</li></Link>
                <Link to="/AllData"> <li>All Data</li></Link>
            </ul>  </div>
    )
}

export default Navbar
