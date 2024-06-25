import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className='flex justify-between items-center bg-black p-4'>
      <div className="text-2xl font-bold text-white">
        Shopping Toolkit
      </div>
      <div className="flex items-center space-x-6">
        <NavLink to="/" className='text-white hover:text-gray-300'>
          Home
        </NavLink>
        <NavLink to="/cart" className='text-white hover:text-gray-300'>
          Cart
        </NavLink>
        <div className='text-white'>
          Cart Items: {items.length}
        </div>
        <div className='relative cursor-pointer group'>
          <FaShoppingCart className='text-white text-2xl group-hover:text-gray-300' />
          <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
            {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
