import React from 'react'
import {  NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {useSelector} from 'react-redux'

const NavBar = () => {

    const items = useSelector(state => state.cart)

    return (
        <div className='flex justify-between bg-black p-2'>
            <div className="font-bold 2xl text-white">
                Shopping Toolkit
            </div>

            <div>
                <NavLink to="/" className='text-white'>Home </NavLink>
                <NavLink to="/cart" className='text-white px-4'>Cart </NavLink>
                <div className='text-white'>Cart Item : {items.length}</div>
            </div>
            <div className='relative cursor-pointer group hover:scale-110 active:scale-105 space-x-4' >
                <FaShoppingCart style={{ color: '#fff', fontSize: '1.5rem' }} />
            </div>
        </div>
    )
}

export default NavBar
