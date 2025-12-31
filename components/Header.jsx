import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='navbar'>
            <NavLink  to = '/'> Home</NavLink>
            <NavLink to = '/about' >About</NavLink>
            <NavLink to = '/contact' >Contact</NavLink>
            <NavLink to = '/login' >Login</NavLink>
            <NavLink to = '/product' >Product</NavLink>
        
        </div>
    )
}

export default Header
